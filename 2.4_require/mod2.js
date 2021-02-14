exports.id = 'mod2';

const mod1 = require('./mod1');
console.log('mod1.data in mod2 =', mod1.data);  // [ 1, 11 ]
// mod1.show_mod2('mod2'); <- TypeError: mod1.show_mod2 is not a function

exports.data = [2];
exports.data.push(22);
exports.data.push(222);
exports.data.push(2222);
exports.data.push(22222);

function show_mod1(from) {
  console.log(`mod2.show_mod1() from ${from} -> ${mod1.data}`);
}

exports.show_mod1 = show_mod1;
