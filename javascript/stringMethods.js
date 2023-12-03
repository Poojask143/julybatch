let text="i live in pune , i live Mumbai"; 

let textlength=text.length;
console.log(textlength);

console.log(text.length);

let slicedText=text.slice(2,6); //start index:inclusive, end index:exclusive
console.log(slicedText);
console.log(text.slice(10,16));
console.log(text.slice(5));
console.log(text.slice (-13,-5));//start index:exclusive, end index:inclusive
console.log(text.slice (-13));

console.log(text.substring(-1,10));  //negative value is treated at 0 here,end index exclusive

console.log(text.substr(2,6)); //start index,length

console.log(text.replace('pune','mumbai'));

console.log(text.replace('beed','pune')); //

console.log(text.replace('mumbai','pune')); // original string:replace is case sensitive

console.log(text.replace(/mumbai/i,'pune'));

console.log(text.replace(/mumbai/ig,'pune')); //insensitive /globally replace


console.log(text.replaceAll('mumbai','naded'));//case sensitive
console.log(text.replaceAll(/mumbai/g,'naded'));


console.log(text.replace(/user live in Mumbai,i like Mumbai/i,"poonam"));
console.log(text.replace('i like','111111'));

function replaceFirstOccurence(str,find,replace)
{
    return str.replace(new RegExp,replace);}

    var originalString="this is a test.this is a test.this is a test.";
    var searchString="This is a test";
    var replacementString="That was a test"
    var resultString = replaceFirstOccurence (originalString,searchString,replacementString);
    console.log(resultString);

console.log(text.toUpperCase());
console.log(text.toLocaleLowerCase());

//concat()

let firstName='pooja';
let lastName='surwase';
//let fullName=firstName+ " " + lastName;
let fullName=firstName.concat('',no,'',lastName,'',40000);

console.log(fullName);

console.log('lwr->',text.toUpperCase(),'uper->',text.toUpperCase());
//the trim() method whitespace from both sides of string:
let data='  thtjtyjy  ';
console.log(data.trim());


var string= "  This  should  become  something      else  too  .  ";
stringData=string.trim().replace(/\s+/g,"");
console.log(stringData);

//toString()
let num=6565656565;
let data1=num.toString();
console.log(data1);  //it will return empty

let text1="HELLO WORLD";
let char=text.charAt(0);
let d=text1.charAt(20);
console.log(d);

//split()
let date="20-feb-1995";
let newDate=date.split('-')  //it splits out data and will retrun array.
console.log(newDate);
console.log(newDate[2]);

let num2="65656565";
let m=parseInt(num2);
console.log(m);

let text4="sfdg hrgu kuoio hjmhbmoi hghkjkj";
t5=text4.split("  ");
console.log(t5);

let add=" bhyty ghghjuhk kjhjkhjhk hhi pooja jkkjjjjjj";
console.log(add.includes("pooja")); // include method retruns true if value is include in data else will retrun false

//{
//"status":"success",
//"statusCode":"100256",
//massage:"data submited sucessfully"
//}

let statusCode="100256";
let a =statusCode.startsWith("100");
console.log(a);
console.log(statusCode.endsWith("56"));

let text5="hello to wrold,welcome to the universe.";
//let result =text5.indexOf("to");  // it should retrun first match of index 
let result=text5.indexOf("toooooo");//-1
console.log(result);
console.log();
console.log(text5.lastIndexOf("to"));
console.log(text5.lastIndexOf("toooooo"));//-1

let text6="mr. blue has a blue house";
//let position=text.search("blue");
let position=text.search(/blue/);// we c reg ex add patteran
console.log(position);//differnce between search and indexOf method is we can not pass reg ex patteren to index method

//the search()cannot take a start position argument
//indexOf() method cannot search against a regular expression
//the search() method retruns the position of the first match.
//the match() mathod retruns an array of  matches.

let text7="the rain in SPAIN stays mainly in the plain";
let g=text7.match("ain");
console.log(g);
xonsole.log(text7.match(/ain/g));