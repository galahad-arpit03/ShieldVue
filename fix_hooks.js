const fs = require('fs');

const files = [
  "src/ComplianceGovernance/ComplianceHero.tsx",
  "src/sbom/sbomhero.tsx",
  "src/VulnerabilityIntelligence/VulnerabilityHero.tsx",
  "src/BookDemo/BookDemoHero.tsx",
  "src/cbom/cbomHero.tsx",
  "src/Overview/Hero.tsx",
  "src/company/about/abouthero.tsx",
  "src/company/leadership/leadershipHero.tsx"
];

for (const file of files) {
  if (!fs.existsSync(file)) continue;
  let content = fs.readFileSync(file, 'utf8');

  if (content.includes('containerRef = useRef')) {
    console.log(`Skipping ${file} (already has containerRef)`);
    continue;
  }

  const hookInjection = `
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
`;

  // Find "export default function" and inject right after the first "{"
  const match = content.match(/export default function\s+[A-Za-z0-9_]+\s*\([^)]*\)\s*\{/);
  if (match) {
    const splitIndex = match.index + match[0].length;
    content = content.substring(0, splitIndex) + hookInjection + content.substring(splitIndex);
    fs.writeFileSync(file, content);
    console.log(`Fixed ${file}`);
  } else {
    console.log(`Could not find export default in ${file}`);
  }
}
