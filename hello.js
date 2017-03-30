"use strict";
exports.__esModule = true;
var Hello = (function () {
    function Hello() {
    }
    return Hello;
}());
exports.Hello = Hello;
function test(template, name, age) {
    // body...
    console.log(template);
    console.log(name);
    console.log(age);
}
var myname = "kaitai";
var alias = "xixi";
var age = 13;
var man = true;
function tst(name) {
    return '';
}
tst('1');
var Person = (function () {
    function Person() {
    }
    return Person;
}());
;
var zhangsan = new Person();
zhangsan.age = 18;
zhangsan.name = "zhangsan";
var getAge = function () {
    return 18;
};
(_a = ["hello my name is  ", ",I'm ", ""], _a.raw = ["hello my name is  ", ",I'm ", ""], test(_a, myname, getAge()));
var myname1 = "kt";
function test1(a, b, c) {
    if (c === void 0) { c = 'jojo'; }
    console.log(a);
    //可选参数和默认参数不能声明在必选参数之前
    console.log(b);
    console.log(c);
}
test1("xxx", "yyy", 'zzz');
test1("xxx", "yyy");
test1("xxx");
function func1() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    args.forEach(function (arg) {
        console.log(arg);
    });
}
function func2(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}
var args = [1, 2];
func2.apply(void 0, args);
var args2 = [7, 8, 9, 10, 11];
func2.apply(void 0, args);
//es6
// function* getStockPrice(stock){
//   while(true){
//     yield Math.random()*100;
//   }
// }
// var priceGenerator = getStockPrice("IBM");
// var limitPrice = 15;
// var price =100;
// while( price > limitPrice){
//   price = priceGenerator.next().value;
//   console.log(`the generator return ${price}`);
// }
// console.log(`buying at ${price}`);
function getStock() {
    return {
        code: 'IBM',
        price: {
            price1: 200,
            price2: 400
        },
        aaa: 'xixi',
        bbb: 'haha'
    };
}
//javascript语法
// var stock = getStock();
// var code = stock.code;
// var price = stock.price;
//ts语法
var _b = getStock(), codex = _b.code, price2 = _b.price.price2; //codex 是code的别名,price2是嵌套对象的某个属性
console.log(codex);
console.log(price2);
//针对数组的析构表达式
var array1 = [1, 2, 3, 4];
var number1 = array1[0], number4 = array1[3];
console.log(number1);
console.log(number4);
// var [number1,number2,...others] = array1;
// console.log(number1);
// console.log(number2);
// console.log(others);
function doSomething(_a) {
    var number1 = _a[0], number2 = _a[1], others = _a.slice(2);
    console.log(number1);
    console.log(number2);
    console.log(others);
}
doSomething(array1);
var _a;
