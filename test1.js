"use strict";
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
x = ['����', 2];
var y = 1;
y = 'test';
y = true;
var changeData;
changeData = 87;
changeData = null;
changeData = undefined;
var p;
var q;
//const q: string; is a warring
