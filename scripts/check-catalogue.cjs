const assert = require('node:assert/strict');
const p=require('../src/data/tarifs.json');
for(const period of ['weekend','soiree']) for(const f of ['digitale','impression','complete']) assert.ok(Number.isFinite(p[period][f])&&p[period][f]>0,`Tarif invalide : ${period}.${f}`);
for(const [group,values]of Object.entries(p))for(const [key,value]of Object.entries(values))assert.ok(typeof value==='number'&&Number.isFinite(value)&&value>=0,`Valeur invalide : ${group}.${key}`);
assert.ok(p.inclus.impression>0&&p.inclus.complete>=p.inclus.impression,'Quantités d’impressions incohérentes');
assert.ok(p.inclus.livraisonCompleteKm<=60,'Zone de livraison incluse non prise en charge au-delà de 60 km');
console.log('Catalogue valide : prix numériques, valeurs et quantités cohérentes.');
