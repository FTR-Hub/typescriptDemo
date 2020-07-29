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
var a = 2.0;
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
