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
