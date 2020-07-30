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
var a: number = 2
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
let arr4: [string, number]
// 当访问一个越界的元素，会使用联合类型替代,'string' 和 'number' 都有 toString
arr4 = ['aaa', 1123]
// arr4[3] = '123'
console.log(arr4)


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


// void空值，void可以表示没有任何返回值的函数
function alertNum(): void {
  alert('无返回值的函数')
}
// alertNum()
// 当一个值被定义为void时，只能复制undefined
let voidVariable: void = undefined

//在 TypeScript 中，可以使用 null 和 undefined 来定义这两个原始数据类型：而且只能将对应的值付给对应的变量否则会报错
let nullVariable: null = null
let undefinedVariable: undefined = undefined
console.log(typeof nullVariable, typeof undefinedVariable, typeof NaN)


// Any 有时候，我们会想要为那些在编程阶段还不清楚类型的变量指定一个类型。 这些值可能来自于动态的内容，比如来自用户输入或第三方代码库。 这种情况下，我们不希望类型检查器对这些值进行检查而是直接让它们通过编译阶段的检查。 那么我们可以使用 any类型来标记这些变量：
let anyVariable: any = 1
anyVariable = '1'
anyVariable = false
anyVariable = {
  num: 1
}
let objVariable: Object = 4
// anyVariable.num.toFixed(2)
console.log(anyVariable.num.toFixed(2), typeof anyVariable, typeof objVariable, a.toFixed(2))

// Never never类型表示的是那些永不存在的值的类型。 例如， never类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型； 变量也可能是 never类型，当它们被永不为真的类型保护所约束时。
// never类型是任何类型的子类型，也可以赋值给任何类型；然而，没有类型是never的子类型或可以赋值给never类型（除了never本身之外）。 即使 any也不可以赋值给never。
function error(message: string): never {
  throw console.log(message)
  // while (true) { }
  // console.log(message)
}
// console.log(error('never'))

// 类型的断言,当ts的某个值自己更加确定其类型时需要用到断言
let someValue: any = "1"
let stringLength: number = (<string>someValue).length
console.log(stringLength, typeof stringLength)