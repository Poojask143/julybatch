//let/var/const vm =valuer

//default var keyword

//scope level diff:
//let:block level scope, var:function level scope

function test(){
    let a = 10;
    if(a < 20){
        let b = 30;
        var c = 60;
    }
    console.log(c);
    console.log(b);
}
console.groupCollapsed(test());

//redeclaration is not possible with let keyword
//Redeclaration is possible with var keyword

// const city='pune';
//const city="mumbai";

// let city='pune';
//let city="mumbai";

var city='pune';
var city="mumbai";

//reassigning value to the variable is possible with let,var keyword but
//not possible with const keyword

let marks=50;
marks =60;

const s =87;
s=77;

//hosting:first define value to the variable then declare it;

//hosting is possible using var keyword
//not possible with const ,let keyword

p=50;
var p;

//defining value at a time of declaration

let f;
f = 40;

var r;
r = 57;

//const y;
//y = 90;

const y = 90;