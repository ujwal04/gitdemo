let cars=['BMW',1,true,6.67];
console.log(cars);

// accessing the elements of array
console.log(cars[0]);
console.log(cars[3]);

//replacing elements in an array
cars[3]="Mahindra";
console.log(cars[3]);

//adding elements in an array
cars[4]="Honda";
console.log(cars);

//Methods of array
//1)pop method->this method removes last element of the array
cars.pop();
console.log(cars);

//2)push method->pushes a new element at the end of thr array
cars.push("Tata");
console.log(cars);

//3)unshift method->adds element at the start of the array
cars.unshift("JLR");
console.log(cars);

//4)shift method->removes element from start of the array
cars.shift();
console.log(cars);

//5)length of array
console.log(cars.length);

//2d array
let array2d = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
];  
console.log(array2d);
console.table(array2d);//prints 2d array in the form of a table
console.log(array2d[1][2]);








