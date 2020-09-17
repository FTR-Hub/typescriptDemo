"use strict";
var str = "hello world";
/**
 * 1.ts里面数据类型的定义是强类型的，当该值被定义了数据类型后。后面的赋值只能是该类型的
 * 2.后续变量声明必须属于同一类型。变量“a”必须属于类型“number”，但此处却为类型“string”。
 * 也就是说同名的变量只能有一个类型，
 */
// 布尔类型
var flag = true;
flag = false;
// number类型
var a = 2;
console.log(a);
// string类型
// var a: string = 1
// console.log(a)
// 数组类型
// 方法1
var arr = [1, 2, 3];
console.log(arr);
// 方法2
var arr2 = ['1', '2', '3'];
console.log(arr2);
// 元组 可以理解为一种数组，不过数组中的每个元素都被强定义了类型，必须一一对应
var arr3 = ['2', 1, true];
console.log(arr3);
var arr4;
// 当访问一个越界的元素，会使用联合类型替代,'string' 和 'number' 都有 toString
arr4 = ['aaa', 1123];
// arr4[3] = '123'
console.log(arr4);
// enum 枚举,很多情况下可以用来当作字典
// 注意不能将boolean类型直接赋值给枚举值
var Enum;
(function (Enum) {
    Enum[Enum["success"] = 1] = "success";
    Enum[Enum["error"] = 0] = "error";
})(Enum || (Enum = {}));
var e = Enum.success;
console.log(e);
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["green"] = 1] = "green";
    Color[Color["black"] = 2] = "black";
})(Color || (Color = {}));
// 当枚举值为空时会输出枚举值的下标
var col = Color.red;
console.log(col);
// void空值，void可以表示没有任何返回值的函数
function alertNum() {
    alert('无返回值的函数');
}
// alertNum()
// 当一个值被定义为void时，只能复制undefined
var voidVariable = undefined;
//在 TypeScript 中，可以使用 null 和 undefined 来定义这两个原始数据类型：而且只能将对应的值付给对应的变量否则会报错
var nullVariable = null;
var undefinedVariable = undefined;
console.log(typeof nullVariable, typeof undefinedVariable, typeof NaN);
// Any 有时候，我们会想要为那些在编程阶段还不清楚类型的变量指定一个类型。 这些值可能来自于动态的内容，比如来自用户输入或第三方代码库。 这种情况下，我们不希望类型检查器对这些值进行检查而是直接让它们通过编译阶段的检查。 那么我们可以使用 any类型来标记这些变量：
var anyVariable = 1;
anyVariable = '1';
anyVariable = false;
anyVariable = {
    num: 1
};
var objVariable = 4;
// anyVariable.num.toFixed(2)
console.log(anyVariable.num.toFixed(2), typeof anyVariable, typeof objVariable, a.toFixed(2));
// Never never类型表示的是那些永不存在的值的类型。 例如， never类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型； 变量也可能是 never类型，当它们被永不为真的类型保护所约束时。
// never类型是任何类型的子类型，也可以赋值给任何类型；然而，没有类型是never的子类型或可以赋值给never类型（除了never本身之外）。 即使 any也不可以赋值给never。
function error(message) {
    throw console.log(message);
    // while (true) { }
    // console.log(message)
}
// console.log(error('never'))
// 类型的断言,当ts的某个值自己更加确定其类型时需要用到断言
var someValue = "1";
var stringLength = someValue.length;
console.log(stringLength, typeof stringLength);
// ts的结构
var arraaa = [1, 2];
var first = arraaa[0], second = arraaa[1];
console.log(first, second);
var testobj = {
    a: 1,
    b: '2'
};
function testhg(_a) {
    var a = _a[0], b = _a[1];
    console.log(a, b);
}
// testhg(arraaa)
// 接口
// 这只是一个函数的参数传递
function printLabel(labelObj) {
    console.log(labelObj);
}
var myObj = { size: 10, label: 'ts的接口' };
printLabel(myObj);
/*  LabelledValue接口就好比一个名字，用来描述上面例子里的要求。 它代表了有一个 label属性且类型为string的对象。
 需要注意的是，我们在这里并不能像在其它语言里一样，说传给 printLabel的对象实现了这个接口。我们只会去关注值的外形。
  只要传入的对象满足上面提到的必要条件，那么它就是被允许的。**/
function printLabel2(labelObj) {
    console.log(labelObj);
}
var myObj2 = { size: 10, label: 'ts的接口' };
printLabel2(myObj2);
// function creatSquare(config: SquareConfig) {
//   console.log(config)
// }
// creatSquare({})
function creatSquare(config) {
    var newSquare = { color: 'red', area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width;
    }
    return newSquare;
}
var result = creatSquare({ color: 'red', width: 300 });
console.log(result);
var p1 = { x: 10, y: 20 };
// p1.x = 5 // error x为只读
var v = [1, 2, 3];
var ro = v;
var mySearch;
mySearch = function (source, subString) {
    var result = source.search(subString);
    console.log(result);
    return result > -1;
};
var myArray;
myArray = ['blob', 'fed'];
var myStr = myArray[0];
console.log(myArray, myStr);
