const fs = require('fs');
let content = fs.readFileSync('src/Common/NavBar/NavBar.tsx', 'utf8');

// Update desktop button group
content = content.replace(
  /<button[\s\S]*?className="[\s\S]*?text-slate-600[\s\S]*?"[\s\S]*?>[\s\S]*?{group.title}/m,
  (match) => {
    return `const isActiveGroup = pathname && group.items.some((item) => pathname.startsWith(item.href));
            
            return (
            <div key={group.title} className="group relative py-5">
              <button
                className={\`
                  flex
                  items-center
                  gap-1
                  text-sm
                  font-medium
                  transition-colors
                  group-hover:text-primary
                  \${isActiveGroup ? 'text-primary' : 'text-slate-600'}
                \`}
              >
                {group.title}`;
  }
);
// Above replace will fail if it's too rigid, let's use a smarter replace

fs.writeFileSync('src/Common/NavBar/NavBar.tsx', content);
