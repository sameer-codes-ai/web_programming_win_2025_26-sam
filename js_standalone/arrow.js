function greet() {
    let c = 10 +20;
    return "Hello, World!";
}

var greetArrow = () => {
    let c = 10 + 20;
    "Hello World";
}
console.log(greet());

function square(x, y){
    return x * x;
}

// const square = (x, y) => x * x;

function add(...numbers){
    let sum = 0;
    for (let index = 0; index < numbers.length; index++) {
            sum = sum + numbers[index] ;        
    }
    return sum;
}

console.log(add(1,2,3,4,5));