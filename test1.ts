//第一个小测试，测试ts语法的数据类型

const hello: string = 'hello typescript';
const firstDemo = hello;
console.log(firstDemo);

class Name {
	name(): void {
		console.log('min')
	}
}

const person = new Name();
person.name();

let binaryLiteral: number = 0b1010;

let arr: number[] = [1, 2];

let x: [string, number];

x=['test',2]