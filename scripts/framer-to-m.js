const fs = require('fs');
const path = require('path');

function walk(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const stat = fs.statSync(path.join(dir, file));
    if (stat.isDirectory()) {
      if (file !== 'node_modules' && file !== '.next') {
        walk(path.join(dir, file), fileList);
      }
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      fileList.push(path.join(dir, file));
    }
  }
  return fileList;
}

const allFiles = walk(path.join(__dirname, '../src'));
// Also include app dir if needed
const appFiles = walk(path.join(__dirname, '../app'));
allFiles.push(...appFiles);

let updatedFiles = 0;

for (const file of allFiles) {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;

  // Replace import { motion } with import { m }
  // Need to be careful about import { motion, AnimatePresence } etc.
  if (content.includes('from "framer-motion"') || content.includes("from 'framer-motion'")) {
    const importRegex = /import\s+{([^}]+)}\s+from\s+["']framer-motion["']/g;
    content = content.replace(importRegex, (match, p1) => {
      const parts = p1.split(',').map(s => s.trim());
      const hasMotion = parts.includes('motion');
      if (hasMotion) {
        changed = true;
        const newParts = parts.map(p => p === 'motion' ? 'm' : p);
        return `import { ${newParts.join(', ')} } from "framer-motion"`;
      }
      return match;
    });

    if (changed) {
      // Replace <motion. and </motion.
      content = content.replace(/<motion\./g, '<m.');
      content = content.replace(/<\/motion\./g, '</m.');
      fs.writeFileSync(file, content, 'utf8');
      updatedFiles++;
    }
  }
}

console.log(`Updated ${updatedFiles} files to use 'm' instead of 'motion'.`);
