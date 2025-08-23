import path from 'node:path';
import { fileURLToPath } from 'node:url';
import puppeteer from 'puppeteer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function run() {
  const inputHtml = path.resolve(__dirname, '..', 'docs', 'BDC-BLONDIE-LEFLEUR-2025-001.html');
  const outputPdf = path.resolve(__dirname, '..', 'docs', 'BDC-BLONDIE-LEFLEUR-2025-001.pdf');

  const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.goto('file://' + inputHtml, { waitUntil: 'load' });
  await page.pdf({
    path: outputPdf,
    format: 'A4',
    printBackground: true,
    margin: { top: '14mm', right: '12mm', bottom: '18mm', left: '12mm' }
  });
  await browser.close();
  console.log('PDF generated at', outputPdf);
}

run().catch((err) => { console.error(err); process.exit(1); });


