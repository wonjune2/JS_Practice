let value = true;

value = String(value);
alert(typeof value);

let str = "123";

let num = Number(str);

alert(typeof num);

alert( Boolean(1) ); // 숫자 1(true)
alert( Boolean(0) ); // 숫자 0(false)

alert( Boolean("hello") ); // 문자열(true)
alert( Boolean("") ); // 빈 문자열(false)
