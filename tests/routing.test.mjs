import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import test from 'node:test';

const root = process.cwd();
const read = (file) => fs.readFileSync(path.join(root, file), 'utf8');
const walk = (directory) => fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => entry.isDirectory() ? walk(path.join(directory, entry.name)) : [path.join(directory, entry.name)]);

test('separa a página institucional da área de cursos', () => {
  assert.equal(fs.existsSync(path.join(root, 'src/app/cursos/page.tsx')), true);
  assert.match(read('src/app/page.tsx'), /InstitutionalHome/);
  assert.match(read('src/app/cursos/page.tsx'), /CourseCatalog/);
});

test('oferece navegação institucional e acesso direto a cursos', () => {
  const navbar = read('src/components/layout/Navbar.tsx');
  assert.match(navbar, /usePathname/);
  assert.match(navbar, /aria-current/);
  assert.match(navbar, /href: "\/#servicos"/);
  assert.match(navbar, /href: "\/#sobre"/);
  assert.match(navbar, /href: "\/cursos"/);
  assert.match(navbar, /href: "\/#contato"/);
});

test('define movimento reduzido e metadados institucionais', () => {
  assert.match(read('src/app/globals.css'), /prefers-reduced-motion/);
  assert.match(read('src/app/layout.tsx'), /DS Despachante Guarujá/);
});

test('oferece atalho de teclado para o conteúdo principal', () => {
  assert.match(read('src/app/layout.tsx'), /href="#conteudo-principal"/);
  assert.match(read('src/components/institutional/InstitutionalHome.tsx'), /id="conteudo-principal"/);
  assert.match(read('src/app/cursos/page.tsx'), /id="conteudo-principal"/);
});

test('mantém atalhos do rodapé dentro das rotas válidas', () => {
  const footer = read('src/components/layout/Footer.tsx');
  assert.match(footer, /href="\/cursos"/);
  assert.match(footer, /href="\/#servicos"/);
  assert.doesNotMatch(footer, /href="#"/);
});

test('usa a API atual do calendário e um script de build compatível com Windows', () => {
  assert.match(read('src/components/ui/calendar.tsx'), /Chevron:/);
  assert.doesNotMatch(read('src/components/ui/calendar.tsx'), /IconLeft:/);
  assert.doesNotMatch(read('package.json'), /NODE_ENV=production next build/);
});

test('expõe SEO básico para a estrutura institucional', () => {
  assert.match(read('src/app/layout.tsx'), /metadataBase/);
  assert.match(read('src/app/page.tsx'), /canonical/);
  assert.match(read('src/app/cursos/page.tsx'), /canonical/);
  assert.equal(fs.existsSync(path.join(root, 'public/sitemap.xml')), true);
  assert.equal(fs.existsSync(path.join(root, 'public/robots.txt')), true);
});

test('inclui todos os detalhes de curso no sitemap', () => {
  const courseIds = [...read('src/lib/courses.ts').matchAll(/id: "([^"]+)"/g)].map((match) => match[1]);
  const sitemap = read('public/sitemap.xml');
  for (const id of courseIds) {
    assert.match(sitemap, new RegExp(`/cursos/${id}</loc>`));
  }
});

test('retorna detalhes de curso ao catálogo preservado', () => {
  assert.match(read('src/app/cursos/[id]/page.tsx'), /router\.push\("\/cursos#cursos"\)/);
});

test('trata rotas de curso inexistentes como 404 e gera SEO por curso', () => {
  const layoutPath = 'src/app/cursos/[id]/layout.tsx';
  assert.equal(fs.existsSync(path.join(root, layoutPath)), true);
  const layout = read(layoutPath);
  assert.match(layout, /notFound\(\)/);
  assert.match(layout, /generateStaticParams/);
  assert.match(layout, /dynamicParams = false/);
  assert.match(layout, /generateMetadata/);
});

test('protege links abertos em nova guia', () => {
  const files = walk(path.join(root, 'src')).filter((file) => file.endsWith('.tsx'));
  const unsafeLinks = files.flatMap((file) => (fs.readFileSync(file, 'utf8').match(/<(?:Link|a)\b[^>]*target="_blank"(?![^>]*\brel=)[^>]*>/g) ?? []).map((link) => `${path.relative(root, file)}: ${link}`));
  assert.deepEqual(unsafeLinks, []);
});

test('separa a mensagem institucional do atendimento específico de cursos', () => {
  assert.match(read('src/lib/constants.ts'), /INSTITUTIONAL_WHATSAPP/);
  assert.match(read('src/components/institutional/InstitutionalHome.tsx'), /LINKS\.INSTITUTIONAL_WHATSAPP/);
  assert.match(read('src/components/home/CTASection.tsx'), /LINKS\.WHATSAPP/);
});

test('não apresenta avatares de demonstração ou métricas não confirmadas nos cursos', () => {
  const hero = read('src/components/home/Hero.tsx');
  assert.doesNotMatch(hero, /picsum\.photos/);
  assert.doesNotMatch(hero, /1\.284 Alunos Formados/);
});

test('exibe os contatos confirmados da DS nas áreas institucionais', () => {
  const constants = read('src/lib/constants.ts');
  const home = read('src/components/institutional/InstitutionalHome.tsx');
  const footer = read('src/components/layout/Footer.tsx');
  assert.match(constants, /Alameda das Tulipas, 214/);
  assert.match(constants, /contato@dscursos\.online/);
  assert.match(home, /BRAND\.ADDRESS/);
  assert.match(footer, /BRAND\.EMAIL/);
});

test('preserva os recursos e destinos de inscrição dos 28 cursos', () => {
  const catalog = read('src/lib/courses.ts');
  const imagePaths = [...catalog.matchAll(/image: "([^"]+)"/g)].map((match) => match[1]);
  const purchaseUrls = [...catalog.matchAll(/purchaseUrl: "([^"]+)"/g)].map((match) => match[1]);
  const whatsappUrls = [...catalog.matchAll(/whatsappUrl: "([^"]+)"/g)].map((match) => match[1]);
  assert.equal(imagePaths.length, 28);
  assert.equal(purchaseUrls.length, 28);
  assert.equal(whatsappUrls.length, 28);
  assert.equal(imagePaths.every((imagePath) => fs.existsSync(path.join(root, 'public', imagePath))), true);
  assert.equal(purchaseUrls.every((url) => url.startsWith('https://ead-checkout.bludata.net/')), true);
  assert.equal(whatsappUrls.every((url) => url.startsWith('https://wa.me/5513991932590')), true);
});

test('oferece estados próprios de carregamento, erro e rota inexistente', () => {
  const requiredFiles = [
    'src/app/loading.tsx',
    'src/app/error.tsx',
    'src/app/not-found.tsx',
  ];
  for (const file of requiredFiles) {
    assert.equal(fs.existsSync(path.join(root, file)), true, `${file} precisa existir`);
  }
  assert.match(read('src/app/not-found.tsx'), /Voltar para o início/);
  assert.match(read('src/app/error.tsx'), /Tentar novamente/);
});
