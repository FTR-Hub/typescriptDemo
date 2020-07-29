let str: string = "hello world"
/**
 * 1.ts里面数据类型的定义是强类型的，当该值被定义了数据类型后。后面的赋值只能是该类型的
 * 2.后续变量声明必须属于同一类型。变量“a”必须属于类型“number”，但此处却为类型“string”。
 * 也就是说同名的变量只能有一个类型，
 */
// 布尔类型
var flag: boolean = true
flag = false
// number类型
var a: number = 2.0
console.log(a)
// string类型
// var a: string = 1
// console.log(a)
// 数组类型
// 方法1
let arr: number[] = [1, 2, 3]
console.log(arr)
// 方法2
let arr2: Array<string> = ['1', '2', '3']
console.log(arr2)

// 元组 可以理解为一种数组，不过数组中的每个元素都被强定义了类型，必须一一对应
let arr3: [string, number, boolean] = ['2', 1, true]
console.log(arr3)


// enum 枚举,很多情况下可以用来当作字典
// 注意不能将boolean类型直接赋值给枚举值
enum Enum {
  success = 1,
  error = 0

}
let e: Enum = Enum.success
console.log(e)

enum Color {
  red, green, black
}
// 当枚举值为空时会输出枚举值的下标
let col: Color = Color.red
console.log(col)