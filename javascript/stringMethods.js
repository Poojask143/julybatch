let text="i live in pune" , "i live pune"; 

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

console.log(text.replace('i like,'111111));

function replaceFirstOccurence(str,find,replace)
{
    return str.replace(new RegExp,replace);r

    var originalString="this is a test.this is a test.this is a test.";
    var searchString="This is a test";
    var replacementString="That was a test"
    var resultString = replaceFirstOccurence (originalString,searchString,replacementString);
    console.log(resultString);

