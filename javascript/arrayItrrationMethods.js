const numbers = [45, 4 , 9, 16, 25];//9

//using simple loop
let num = [];
for(let i=0; i < numbers.length; i++){
    if(number[i] !=9){
        num.push(numbers[i])

    }
}
console.log(num);

//using forEach() array itr method
let num2=[];
numbers.forEach(item => {
    if(item !=9){
        num2.push(item)
     }
})
console.log(num2);

//break /continue
num=[];
for(let i = 0; i < numbers.length ; i++){
    if(numbers[i] ==16){
       break;//break out looping
     }
     num.push(numbers[i]);
}
console.log(num);

for(let i = 1 ; i <= 50; i++){
    if(i >= 31 && 1 <=40){
        console.log(i);
    }
}

const item=[1,2,3,4,5,6,7,8,9,10];
item.forEach(ele=>{
    if(ele =>3 && ele <=9){
     (ele,'<br>');
    }   //document.write(ele,'<br>');
})

item.push(44)
//document.write(item);
//const n=[1,2,3,4,5,6,7,8,9,10];
//n=[20,55]; 
//console.log(n);


//find() it will return first match that passess your test condition
let no=item.findc(item=>{
    return item>7;
})
console.log(n);//9

//indexOf() //case sensitiver //will return -1 if no match found
const fruits=['banana','Orange','apple','mango','chiku',"Orange"];
console.log(fruits.indexOf("orange"));//1
console.log(fruits.indexOf("orange"));//-1


//lastIndexOf() case sensitive //will return -1 no match found
console.log(fruits.lastIndexOf("Orange"));

//map()
emp=[
    {
    empName :"pooja",  city:"pune"
    },
    {

    empName :"priya",  city:"beed"

    },
    {
        empName :"priya",  city:"nanded"
    }
]

let names = emp.map(empData=>{
    return empData.empName;

})
console.log(names);

//let nameObj = emp.map(({name,age})=>({name,age}))
//console.log(nameObj);
let nameObj = emp.map(empName=>empName)
console.log(nameObj);

let chars=[50,55,44,11,22,33,44,77];

//object are uesd for storing keyed collections.
//Arrays are used for storing ordered collections.
const array=[10,20,30,20,40,20,50];
const searchElement=30;
let fundIndex=[];

array.forEach((element,index)=>{
    if(element === searchElement){

    }
});
console.log(foundIndex);//output2

//includes()//true/false
const array1=[10,20,30,20,40,20,50,88,20];
console.lohg(array1.includes(40));//false

let char =['a','b','a','a','d','f','b'];

//remove item using Set()
let char2 = [...new Set(char)];
console.log(char2);

//filter()
let data =char.filter((item,i)=>{
    return char.indexOf(item)=== i;

})

console.log(data);

//using includes()
let uniqueEle=[];
char.forEach((ele,i)=>{
    if(!uniqueEle.includes(ele))   //! not symbol
    {
        uniqueEle.push(ele)
    }
})
console.log(uniqueEle);