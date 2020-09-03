function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min )) + min;
}
//A
let array = [];
for (let i = 0 ; i < 100 ; i++){
  array.push(getRandom(1,100));
}
//B
const reducer = (accumulator, currentValue) => accumulator + currentValue;
//D
function sortfunction(a, b){
    return (a - b) 
  }

//A
console.log(array);
//B
console.log(array.reduce(reducer)/100);
//C
console.log(array.reduce(reducer));
//D 
console.log(array.sort(sortfunction))
