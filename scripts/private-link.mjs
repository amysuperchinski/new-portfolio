// Changes the password of a private case study.
// Usage:  npm run private-link fiserv "new password"
import { createHash } from 'node:crypto';
import { readdirSync, renameSync } from 'node:fs';

const [project, password] = process.argv.slice(2);
if (!project || !password) {
  console.error('Usage: npm run private-link <project> "<new password>"');
  process.exit(1);
}
const code = createHash('sha256').update(`${project}:${password}`).digest('hex').slice(0, 16);
const dir = 'src/pages/private';
const current = readdirSync(dir).find((f) => f.startsWith(`${project}-`));
if (!current) { console.error(`No private page found for "${project}" in ${dir}`); process.exit(1); }
const next = `${project}-${code}.mdx`;
renameSync(`${dir}/${current}`, `${dir}/${next}`);
console.log(`Password updated. New private address: /private/${project}-${code}/`);
