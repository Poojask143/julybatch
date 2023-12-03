//for loop
//for in loop
//for of loop
//do while loop

//for loop
console.log("1");
console.log("2");
console.log("3");
console.log("4");
console.log("5");
console.log("6");
console.log("7");
console.log("8");
console.log("9");
console.log("10");

for(let a=1; a<=10; a++){
    console.log(a);
}
//for(;;){
    //console.log("pooja");//infinite loop
//}

let student={
    name:'pooja',
    age:'29',
    city:'beed'
}
//for loop -it is uesd to itrate objects
for (let x in student){
    console.log(student[x]); //[]property access symbol[x]
}

let color=['red','orange','blue','green','pink'];
for(let item of color){
    console.log(item);
}
//do while

let no=0;
let a=0;
do{
    console.log(no);
    a++;
}
while(a<=5){
    console.log(a); 
}