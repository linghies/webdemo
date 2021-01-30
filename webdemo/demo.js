// Create global symbol
let s = Symbol.for('foo');
console.log(Symbol.keyFor(s));   // foo

// Create regular symbol
let s2 = Symbol('bar');
console.log(Symbol.keyFor(s2));  // undefined

console.log('\u4e2d\u6587');

var name = '小明';
var age = 20;
var message = '你好, ' + name + ', 你今年' + age + '岁了!';
alert(message);

var sq = 'Hello, world!';
console.log(sq.length); // 13

var arr = [[1, 2, 3], [400, 500, 600], '-'];
var x = 500;
console.log(x); // x应该为500