let obj = {};  //empty object
console.log(obj);

let person = {
    //key : value 
    name: "Abhishek",
    age: 28,
    phone: 9999999999,
    gender: "Male",
    height: "170cm"
};

console.log(`Hey ${person.name}, thank you for signing up !`);
console.log(person.gender);
console.log(person["gender"]);

let str = "Hello";
console.log(str.length); //dot notation
console.log(str["length"]); //square bracket notation

//nesting of objects
let captainAmerica = {
    firstName: "Steve",
    lastName: "Rogers",
    friends: ["Bucky", "Tony Stark", "Brue Banner"],
    age: 102,
    isAvenger: true,
    address: {
        state: "Manhattan",
        city: "New York",
        country: "USA"
    },
    sayHi: function () {
        console.log(`Hello my name is ${this.firstName}`);
    }
};

console.log(captainAmerica);
console.log(captainAmerica.friends);
console.log(captainAmerica.friends[0]);
console.log(captainAmerica["friends"][2]);
captainAmerica.sayHi(); //method accessing 
console.log(captainAmerica.address.city);



// methods-> objects ke andar function
console.log(str.toUpperCase());


// in keyword in js is used to get keys from that object
for(let key in captainAmerica){
    //key
    console.log(`${key}`);
    //variable k andr jo binded value hai wo chahiye
    console.log(captainAmerica[key]);
   
}

for( let keys in captainAmerica.address){
    console.log(`${keys}`);
    console.log(captainAmerica.address[keys]);
}
let car={
    name:"Ferrari",
    model:2022,
    startEngine:function(){
        console.log(`Starting the engine of the car ${this.name}`);
    }
}
car.startEngine();
