// Q11


var age=100;

function displayAge(){
    console.log("global context",age);
}

function changeAge(){
    age=45;
    console.log("age inside function",age);
}

displayAge();
changeAge();