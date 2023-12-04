// spread opearator(...):
// the JavaScript spread operator(...)allows us to 
//quickly copy all or part of an existing array or object
//into another array or object
let num=[40,50,60,40,8,70];


//num.forEach(ele=>{
  //  num2.push(ele);
//})
//console.log(num2);

let num2 =[...num];
    console.log(num2);

    //part element copy
    let [item1, item2, ...item3] = num;
    //item1=40 item2=50, item3=60,40,8,70
    console.log(item1);
    console.log(item2);
    console.log(item3);

    //concatination of array
    let color1 =['red' ,'orange'];
    let color2 =['red' ,'orange'];
    
    let color= [...color1 ,...color2];
    

    //obj:
    let emp={
        name:"pooja",
        age:"25",
        city:"pune"
    };

    let emp3 = {...emp};
    console.log(emp3);

    let emp1={
        name:"priya",
        age:"26",
        city:"pune",
        mob:9878786756
    };
    let emp2={
        name:"poonam",
        age:"28",
        city:"pune"
        salary:30000
    };
    let emp4 = {...emp1, ...emp2};//use spread operator if keys are different in both the obj ,
    console.log(emp4);//do not use sp for obj

    //object.assign(target, ...sources);
    const mergedObj = Object.assign({},emp1,emp2);
    console.log("mergedobj",mergedObj);

    let marks=50;
    if(marks >35){
        console.log('pass');
    }
    else{
        console.log('fail');
    }
    
    //condition ? t >>statement1 : f>> statement2
    marks > 35 ? console.log('pass') :  console.log('fail');

    //arrow functions : allow us to write shorter function syntax:
    function test(){
        return 20*8;
    }

    console.log(test());

    test1 =() => 20*8;
    console.log(test1());