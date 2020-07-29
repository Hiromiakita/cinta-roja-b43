console.log(1);
setTimeout( () => console.log(4) , 0);
for(let i = 0; i < 999999999; i ++);
setTimeout( () => console.log(6) , 5000);

console.log(2);
setTimeout( () => console.log(5) , 2000);
console.log(3);