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