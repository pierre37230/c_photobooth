const assert = require('node:assert/strict');
const p=require('../src/data/tarifs.json');
for(const period of ['weekend','soiree']) for(const f of ['digitale','impression','complete']) assert.ok(Number.isFinite(p[period][f])&&p[period][f]>0,`Tarif invalide : ${period}.${f}`);
for(const [group,values]of Object.entries(p).filter(([group])=>group!=='impressionsIncluses'))for(const [key,value]of Object.entries(values))assert.ok(typeof value==='number'&&Number.isFinite(value)&&value>=0,`Valeur invalide : ${group}.${key}`);
for(const period of ['weekend','soiree']) {
 const included=p.impressionsIncluses[period];
 assert.equal(included.digitale,0);
 assert.ok(Number.isInteger(included.impression)&&Number.isInteger(included.complete)&&included.complete>=included.impression&&included.impression>0);
}
assert.deepEqual(p.impressionsIncluses.weekend,{digitale:0,impression:200,complete:400});
assert.deepEqual(p.impressionsIncluses.soiree,{digitale:0,impression:150,complete:300});
assert.ok(p.inclus.impression>0&&p.inclus.complete>=p.inclus.impression,'Quantités d’impressions incohérentes');
assert.ok(p.inclus.livraisonCompleteKm<=60,'Zone de livraison incluse non prise en charge au-delà de 60 km');
const extras=require('../src/data/locations.json');
const expected={ 'livre-or':[49,29], 'partybox-1':[59,39], 'partybox-2':[99,69], 'micros':[25,15] };
for(const item of extras.items){const values=expected[item.id];assert.ok(values,`Équipement inconnu : ${item.id}`);assert.equal(item.price,values[0]);assert.equal(item.priceWithPhotobooth,values[1]);assert.ok(item.priceWithPhotobooth<item.price);}
assert.equal(extras.items.length,4);
console.log('Catalogue valide : prix numériques, valeurs et quantités cohérentes.');
