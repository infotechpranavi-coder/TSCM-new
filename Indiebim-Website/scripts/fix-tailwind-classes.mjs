import fs from 'fs';
import path from 'path';

const replacements = [
  [
    /\[background-image:(linear-gradient[^\]]+)\]\s*\[background-size:([^\]]+)\]/g,
    'bg-[$1] bg-size-[$2]',
  ],
  [/\[background-image:(radial-gradient[^\]]+)\]/g, 'bg-[$1]'],
  [/left-\[-8rem\]/g, '-left-32'],
  [/right-\[-6rem\]/g, '-right-24'],
  [/min-h-\[9\.5rem\]/g, 'min-h-38'],
  [/bg-gradient-to-br/g, 'bg-linear-to-br'],
  [/bg-gradient-to-bl/g, 'bg-linear-to-bl'],
  [/bg-gradient-to-tr/g, 'bg-linear-to-tr'],
  [/bg-gradient-to-tl/g, 'bg-linear-to-tl'],
  [/bg-gradient-to-r/g, 'bg-linear-to-r'],
  [/bg-gradient-to-l/g, 'bg-linear-to-l'],
  [/bg-gradient-to-t/g, 'bg-linear-to-t'],
  [/bg-gradient-to-b/g, 'bg-linear-to-b'],
  [
    /bg-\[radial-gradient\(ellipse_at_center,_var/g,
    'bg-[radial-gradient(ellipse_at_center,var',
  ],
];

function walk(dir) {
  for (const entry of fs.readdirSync(dir)) {
    const fullPath = path.join(dir, entry);
    if (fs.statSync(fullPath).isDirectory()) {
      walk(fullPath);
      continue;
    }
    if (!/\.(tsx|ts|jsx|js)$/.test(entry)) continue;

    const original = fs.readFileSync(fullPath, 'utf8');
    let updated = original;
    for (const [pattern, replacement] of replacements) {
      updated = updated.replace(pattern, replacement);
    }
    if (updated !== original) {
      fs.writeFileSync(fullPath, updated, 'utf8');
      console.log('updated', fullPath);
    }
  }
}

walk(path.join(process.cwd(), 'src'));
