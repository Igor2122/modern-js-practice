let value;

const today = new Date();
let birthday = new Date('9-10-1981 11:25:00');
birthday = new Date('Septermber 10 1081');
birthday = new Date('9/10/1981');

value = today.getMonth();
value = today.getDay();
value = today.getHours();
value = today.getMinutes();
value = today.getSeconds();
value = today.getTime();

birthday.setMonth(2);
birthday.setDate(12);
birthday.setFullYear(1985);
birthday.setHours(3);
birthday.setMinutes(30);
birthday.setSeconds(25);

console.log(birthday); 