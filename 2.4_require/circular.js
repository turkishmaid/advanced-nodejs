const m = require('./mymod');
console.log(m);

let mod1 = require('./mod1');
console.log(mod1.id);
console.log('mod1.data in go =', mod1.data);

const mod2 = require('./mod2');
mod2.show_mod1('circular');


mod1.data.push(3);
mod2.show_mod1('circular');