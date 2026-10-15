// Downloads your existing images and CV from the current WordPress site
// into /public, so the new site can use them.
// Run once from the project folder:  npm run images
import { mkdir, writeFile, access } from 'node:fs/promises';
import { dirname } from 'node:path';

const BASE = 'https://amysuperchinski.com/wp-content/uploads';
const files = {
  'public/images/monogram.png': `${BASE}/2021/11/monograma-pink.png`,
  'public/images/memoji.png': `${BASE}/2025/02/memoji-test-1.png`,
  'public/images/work/descomplica.png': `${BASE}/2025/02/descomplicaThumb-2-1.png`,
  'public/images/work/icpay.png': `${BASE}/2023/07/icpayThumb_02-1.png`,
  'public/images/work/futura-genetics.png': `${BASE}/2025/02/futuraThumb-test-1.png`,
  'public/images/work/kofrino.png': `${BASE}/2025/02/kofrinoThumb.png`,
  // Descomplica case study
  'public/images/work/descomplica/hero.png': `${BASE}/2018/08/descomplicaAppNot.png`,
  'public/images/work/descomplica/intro.png': `${BASE}/2023/01/descomplicaIntrod.png`,
  'public/images/work/descomplica/notifications.png': `${BASE}/2023/01/descomplicaNotApp02-1.png`,
  'public/images/work/descomplica/push.png': `${BASE}/2023/01/descomplica-PushNotf.png`,
  'public/images/work/descomplica/dark-mode-tooltip.png': `${BASE}/2023/01/descomplicaApp_darkModeTooltip-1-1681x2048.png`,
  'public/images/work/descomplica/dark-mode.png': `${BASE}/2023/01/descomplicaApp_darkMode-1-2048x1365.png`,
  'public/images/work/descomplica/subtitles-tooltip.png': `${BASE}/2023/01/descomplicaApp_subtitlesTooltip-1681x2048.png`,
  // Futura Genetics case study (homepage, blog, testimonials and FAQ question were converted to .jpg and are kept in the project)
  'public/images/work/futura/hero.gif': `${BASE}/2018/08/futuraPageDiseases-1.gif`,
  'public/images/work/futura/sitemap.png': `${BASE}/2023/12/siteMapUpdated.png`,
  'public/images/work/futura/faq.gif': `${BASE}/2018/08/futuraPageFAQ-1.gif`,
  'public/images/work/futura/report.png': `${BASE}/2023/12/23andme_pageReport.png`,
  'public/images/work/futura/report-mobile-1.png': `${BASE}/2018/08/mobileFutura_01-1.png`,
  'public/images/work/futura/report-mobile-2.png': `${BASE}/2018/08/mobileFutura_02.png`,
  'public/images/work/futura/report-mobile-3.png': `${BASE}/2018/08/mobileFutura_03.png`,
  'public/images/work/futura/report-mobile-4.png': `${BASE}/2018/08/mobileFutura_04.png`,
  'public/cv/Amanda_Superchinski_CV.pdf': `${BASE}/2026/09/Amanda_Superchinski_CV_2.pdf`,
};

for (const [dest, url] of Object.entries(files)) {
  try {
    await access(dest);
    console.log(`• skipped (already exists): ${dest}`);
    continue;
  } catch {}
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    await mkdir(dirname(dest), { recursive: true });
    await writeFile(dest, Buffer.from(await res.arrayBuffer()));
    console.log(`✓ ${dest}`);
  } catch (err) {
    console.error(`✗ ${dest} — ${err.message} (${url})`);
  }
}
console.log('\nDone. Replace any of these files with higher-quality exports whenever you like.');
