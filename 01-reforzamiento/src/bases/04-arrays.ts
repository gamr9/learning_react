const myArray: (number | string)[] = [1, 2, 3, 5, 6];

const myArray2 = {...myArray};

myArray2.push(7);

console.log(myArray, myArray2);