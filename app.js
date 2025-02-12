// Define the function with a parameter
function greetUser(name) {
    console.log("Hello, " + name + "!");
}

// call the function and pass an argument
greetUser("Name1");  
greetUser("Name2");   

// function definition
function addNumbers(a, b) {
    return a + b;
}

// function invocation
let sum = addNumbers(5, 3);  // sum is 8
console.log("The sum is: " + sum);  // sum is 8

// create  object with multiple properties
let person = {
    name: "nam1",    // Property: name with a string value
    age: 25,          // Property: age with a number value
    city: "New York", // Property: city with a string value
    isStudent: false, // Property: isStudent with a boolean value
    greet: function() { // Property: greet with a function as the value
        console.log("Hello, " + this.name + "!");
    }
};

// access the properties
console.log(person.name);   // Output: name1
console.log(person.age);    // Output: 25
console.log(person.city);   // Output: New York
console.log(person.isStudent); // Output: false

// invoke the method (greet function)
person.greet();  // Output: Hello, name1!
