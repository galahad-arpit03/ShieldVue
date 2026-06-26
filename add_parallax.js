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

  if (content.includes('useScroll')) {
    console.log(`Skipped ${file} (already has useScroll)`);
    continue;
  }

  // Add imports
  content = content.replace(/import \{ m \} from "framer-motion";/, 'import { m, useScroll, useTransform } from "framer-motion";\nimport { useRef } from "react";');

  // Inject hooks
  const hookInjection = `
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  `;
  
  if (content.match(/(export default function [A-Za-z0-9_]+\([^)]*\) \{\s*return \()/)) {
    content = content.replace(/(export default function [A-Za-z0-9_]+\([^)]*\) \{\s*return \()/, `$1`.replace('return (', hookInjection + '\n  return ('));
  } else {
    content = content.replace(/(export default function [A-Za-z0-9_]+\([^)]*\) \{)/, `$1` + hookInjection);
  }

  // Add ref to section
  content = content.replace(/<section/, '<section ref={containerRef}');

  // Wrap Image inside overflow-hidden div with m.div
  // We'll replace the first <Image that comes after "overflow-hidden"
  // Actually, let's just find `<Image` and wrap it, if it has `fill`
  content = content.replace(/(<Image[^>]+fill[^>]*\/>)/, 
    '<m.div className="absolute inset-0 z-0 origin-top" style={{ y: yBg, scale: 1.1 }}>\n$1\n</m.div>'
  );

  fs.writeFileSync(file, content);
  console.log(`Updated ${file}`);
}
