const assert = require('node:assert/strict');
const { chromium } = require('playwright');

async function main() {
  const browser = await chromium.launch({ channel: process.env.TEST_BROWSER_CHANNEL || 'msedge', headless: true });
  try {
    for (const width of [390, 1440]) {
      const page = await browser.newPage({ viewport: { width, height: 844 }, reducedMotion: 'reduce' });
      await page.goto(`${process.env.TEST_BASE_URL || 'http://localhost:9028'}/cursos`);
      const search = page.getByRole('searchbox', { name: 'Qual curso você procura?' });
      const results = page.locator('#course-results h3');
      await page.waitForFunction(() => document.querySelectorAll('#course-results h3').length === 28);
      await search.fill('MOPP');
      await page.waitForFunction(() => {
        const links = [...document.querySelectorAll('#course-results a')].filter(e => /\/cursos\//.test(e.getAttribute('href')));
        return links.length > 0 && links.every(e => /mopp/i.test(e.getAttribute('href')));
      });
      await search.fill('formacao');
      await page.waitForFunction(() => [...document.querySelectorAll('#course-results a')].some(e => /formacao/.test(e.getAttribute('href'))));
      await search.fill('curso inexistente xyz');
      await page.getByRole('button', { name: 'Limpar busca e filtros' }).click();
      assert.equal(await search.inputValue(), '');
      assert.equal(await results.count(), 28);
      const category = page.getByRole('button', { name: 'Atualização', exact: true });
      await category.click();
      assert.equal(await category.getAttribute('aria-pressed'), 'true');
      assert((await results.allTextContents()).every(name => /atualiza/i.test(name)));
      assert((await category.boundingBox()).height >= 44);
      assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false);
      await page.getByRole('link', { name: 'Ver Detalhes e Inscrição', exact: true }).first().click();
      await page.waitForURL(/\/cursos\/[^/#]+$/);
      const back = page.getByRole('button', { name: /Voltar ao catálogo/i });
      await back.waitFor({ state: 'visible' });
      await back.click();
      await page.waitForURL('**/cursos#cursos');
      console.log(`PASS catalog search, accents, empty state, reset, category, touch target, overflow and detail at ${width}px`);
      await page.close();
    }
  } finally {
    await browser.close();
  }
}

main().catch(error => { console.error(error); process.exitCode = 1; });
