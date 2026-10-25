import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const html = readFileSync('.next/server/app/index.html', 'utf8');

test('home publicada no build tem título e URL canônica locais', () => {
  assert.match(html, /<title>Despachante em Guarujá/);
  assert.match(html, /rel="canonical" href="https:\/\/dsdespachanteguaruja.com.br\/?"/);
  assert.match(html, /property="og:image"/);
  assert.match(html, /name="description" content="DS Despachante em Guarujá/);
});

test('JSON-LD renderizado identifica empresa, contato e endereço comercial', () => {
  const scripts = [...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)];
  const business = scripts.map(match => JSON.parse(match[1])).find(data => data['@type'] === 'LocalBusiness');
  assert.ok(business);
  assert.equal(business.address.addressLocality, 'Guarujá');
  assert.equal(business.address.streetAddress, 'Alameda das Tulipas, 214, loja 1');
  assert.equal(business.address.postalCode, '11432-250');
  assert.equal(business.telephone, '+5513991932590');
  assert.equal(business.taxID, '45.996.258/0002-09');
  assert.equal(business.hasOfferCatalog.itemListElement.length, 8);
  assert.equal(business.aggregateRating, undefined);
  assert.equal(business.openingHours, undefined);
  assert.match(html, /Santo Antônio/);
});
