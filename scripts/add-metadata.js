// eslint-disable-next-line @typescript-eslint/no-require-imports
const fs = require('fs');
// eslint-disable-next-line @typescript-eslint/no-require-imports
const path = require('path');

const pages = {
  'app/platform/compliance-governance/page.tsx': {
    title: 'Compliance & Governance',
    description: 'Ensure continuous security compliance with ShieldVUE automated governance and reporting capabilities.'
  },
  'app/platform/sbom-management/page.tsx': {
    title: 'SBOM Management',
    description: 'Automate your Software Bill of Materials (SBOM) generation, tracking, and management with ShieldVUE.'
  },
  'app/platform/vulnerability-intelligence/page.tsx': {
    title: 'Vulnerability Intelligence',
    description: 'Gain global threat intelligence and deep insights into vulnerabilities affecting your software supply chain.'
  },
  'app/platform/cbom-management/page.tsx': {
    title: 'CBOM Management',
    description: 'Manage cryptographic assets and ensure post-quantum readiness with our comprehensive CBOM management platform.'
  },
  'app/platform/overview/page.tsx': {
    title: 'Platform Overview',
    description: 'Explore the full capabilities of the ShieldVUE enterprise security platform.'
  },
  'app/solutions/supply-chain-security/page.tsx': {
    title: 'Supply Chain Security',
    description: 'Protect your entire software supply chain from code to cloud against emerging tampering threats.'
  },
  'app/solutions/open-source-risk/page.tsx': {
    title: 'Open Source Risk Management',
    description: 'Uncover hidden transitive dependencies and manage open-source software risks automatically.'
  },
  'app/solutions/compliance-audit/page.tsx': {
    title: 'Compliance & Audit',
    description: 'Streamline your enterprise security audits with real-time compliance reporting.'
  },
  'app/solutions/vulnerability-management/page.tsx': {
    title: 'Vulnerability Management Solutions',
    description: 'Prioritize and remediate critical CVEs efficiently with context-aware vulnerability management.'
  },
  'app/contact-us/page.tsx': {
    title: 'Contact Us / Book Demo',
    description: 'Get in touch with the ShieldVUE team or schedule a personalized enterprise demo today.'
  }
};

let updated = 0;

for (const [filePath, meta] of Object.entries(pages)) {
  const fullPath = path.join(__dirname, '..', filePath);
  if (!fs.existsSync(fullPath)) continue;

  let content = fs.readFileSync(fullPath, 'utf8');
  
  if (!content.includes('export const metadata')) {
    const importMeta = content.includes('import { Metadata }') ? '' : 'import { Metadata } from "next";\n';
    const metadataString = `\nexport const metadata: Metadata = {
  title: "${meta.title}",
  description: "${meta.description}",
};\n\n`;

    // Add to the top after the last import
    const lastImportIndex = content.lastIndexOf('import ');
    if (lastImportIndex !== -1) {
      const endOfImport = content.indexOf('\n', lastImportIndex);
      content = content.slice(0, endOfImport + 1) + importMeta + metadataString + content.slice(endOfImport + 1);
    } else {
      content = importMeta + metadataString + content;
    }

    fs.writeFileSync(fullPath, content, 'utf8');
    updated++;
  }
}

console.log(`Updated ${updated} pages with SEO metadata.`);
