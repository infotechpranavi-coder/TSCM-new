/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  for (const f of fs.readdirSync(dir)) {
    const p = path.join(dir, f);
    if (fs.statSync(p).isDirectory()) results = results.concat(walk(p));
    else if (p.endsWith('.tsx') || p.endsWith('.ts')) results.push(p);
  }
  return results;
}

const files = walk('src');
let total = 0;

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  const original = content;

  // Fix Windows-1252 mojibake encoded as Latin-1 in UTF-8 file
  // These are the raw byte sequences that appear when UTF-8 is misread
  content = content.replace(/\u00e2\u20ac\u009c/g, '\u201c');  // " left double quote
  content = content.replace(/\u00e2\u20ac\u009d/g, '\u201d');  // " right double quote
  content = content.replace(/\u00e2\u20ac\u0093/g, '\u2013');  // – en dash
  content = content.replace(/\u00e2\u20ac\u0094/g, '\u2014');  // — em dash
  content = content.replace(/\u00e2\u20ac\u2122/g, '\u2019');  // ' right single quote
  content = content.replace(/\u00e2\u20ac\u0098/g, '\u2018');  // ' left single quote
  content = content.replace(/\u00e2\u20ac\u201c/g, '\u2014');  // — em dash (alt)

  // Also fix plain ASCII mojibake patterns (the garbled visible chars)
  content = content.replace(/\u00c3\u00a2\u00e2\u201a\u00ac\u00e2\u201e\u00a2/g, "'");

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    console.log('Fixed:', file);
    total++;
  }
}

console.log(total + ' files fixed.');
