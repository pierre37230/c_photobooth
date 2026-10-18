const assert = require('node:assert/strict');
const p = require('../src/data/tarifs.json');
const extras = require('../src/data/locations.json');

const periods = ['weekend', 'soiree'];
const formulas = ['digitale', 'impression', 'complete'];
for (const period of periods) {
  assert.ok(p[period] && typeof p[period] === 'object', `Période absente : ${period}`);
  for (const formula of formulas) {
    assert.ok(Number.isFinite(p[period][formula]) && p[period][formula] > 0,
      `Tarif invalide : ${period}.${formula}`);
  }
}
for (const [group, values] of Object.entries(p)) {
  if (group === 'impressionsIncluses') continue;
  assert.ok(values && typeof values === 'object' && !Array.isArray(values), `Groupe invalide : ${group}`);
  for (const [key, value] of Object.entries(values)) {
    assert.ok(typeof value === 'number' && Number.isFinite(value) && value >= 0,
      `Valeur invalide : ${group}.${key}`);
  }
}
for (const period of periods) {
  const included = p.impressionsIncluses?.[period];
  assert.ok(included, `Impressions incluses manquantes : ${period}`);
  assert.equal(included.digitale, 0, `La formule digitale ${period} ne doit pas inclure de tirages`);
  assert.ok(Number.isInteger(included.impression) && included.impression > 0,
    `Impressions invalides : ${period}.impression`);
  assert.ok(Number.isInteger(included.complete) && included.complete >= included.impression,
    `Impressions invalides : ${period}.complete`);
}
assert.ok(Number.isFinite(p.inclus.livraisonCompleteKm) && p.inclus.livraisonCompleteKm <= 60,
  'Zone de livraison incluse non prise en charge au-delà de 60 km');

assert.ok(Array.isArray(extras.items) && extras.items.length > 0, 'Catalogue matériel vide');
const ids = new Set();
for (const item of extras.items) {
  assert.ok(item && typeof item.id === 'string' && item.id.trim(), 'Identifiant équipement invalide');
  assert.ok(!ids.has(item.id), `Identifiant équipement en doublon : ${item.id}`);
  ids.add(item.id);
  assert.ok(typeof item.name === 'string' && item.name.trim(), `Nom équipement invalide : ${item.id}`);
  assert.ok(Number.isFinite(item.price) && item.price > 0, `Prix de location seule invalide : ${item.id}`);
  assert.ok(Number.isFinite(item.priceWithPhotobooth) && item.priceWithPhotobooth > 0,
    `Prix avec photobooth invalide : ${item.id}`);
  assert.ok(item.priceWithPhotobooth <= item.price,
    `Le tarif avec photobooth dépasse le tarif seul : ${item.id}`);
}
console.log('Catalogue valide : prix modifiables, quantités, options et remises cohérents.');
