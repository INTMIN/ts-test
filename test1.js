//��һ��С���ԣ�����ts�﷨����������
var hello = 'hello typescript';
var firstDemo = hello;
console.log(firstDemo);
var Name = /** @class */ (function () {
    function Name() {
    }
    Name.prototype.name = function () {
        console.log('min');
    };
    return Name;
}());
var person = new Name();
person.name();
var binaryLiteral = 10;
var arr = [1, 2];
var x;
x = ['test', 2];
