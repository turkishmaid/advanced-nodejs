exports.id = 'mod1';

exports.data = [];
exports.data.push(1);
exports.data.push(11);

const mod2 = require('./mod2');
mod2.show_mod1('mod1');
//console.log('mod2.data in mod1 =', mod2.data);

exports.data.push('111');
exports.data.push(1111);
exports.data.push(11111);

function show_mod2(from) {
  console.log(`mod1.show_mod2() from ${from} -> ${mod2.data}`);
}

exports.show_mod2 = show_mod2;
