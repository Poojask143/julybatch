let city=['pune','nashik','beed','jaipur',2000]; //heterogenous array
console.log(city.length);//length opr will retrun length of an araay

//toString()
console.log(city.toString());

//pop out/delete last item array and will return the same
console.log(city);
let popedOutItem=city.pop();
console.log(popedOutItem);
console.log(city);

//push() to append /add items at the end of the array,will retrun added items
let retrunedByPush=city.push(6000,'pooja');
console.log(city);
console.log(retrunedByPush);

// the shift() methods removes the first array element and "shifts" all other elements index
let color=['red','pink','yellow','blue'];
letshiftMethodRetrunedData=color.shift();
console.log(shiftMethodRetrunedData);
console,log(color);

//unshift()
let color2=['black','white','red','blue','green'];
color2.unshift('black','orange');
letretrunedData=color2.unshift('black','orange');
console.log(retrunedData);
console.log(color2);

//join
let v=['black','white','red','blue','green'];
let v1=v.join(' ');
console.log(v1);

//let name=["pooja","surwase"]
let name=name=["04","05"];
console.log(name);
letfname=name.join(" / ");
console.log(fName);

//concat
c12=['black','green'];
c13=['white','red','blue'];
let c14=c12.concat(c13,v);
console.log(c14);

//delete
const fruits=['banana','apple','mango','chiku'];
//delete fruits[1];
console.log('>>>',fruits);


//splice(index(where u want to add item ),count(how many elements want to))
const fruit1=["banana","apple","mango","chiku"];
//fruit1.splice(1,0'liwi');
fruit1.splice(1,2,'kiwi');
console.log(fruit1);

const fruit2=["banana","apple","mango","chiku","kiwi"];
let a = fruit2.splice(2,3);
console.log(a);
console.log(fruit2);


//number methods
let no = 787787;
let no1 = no.toString();
console.log(no1);

//toFixed()
let weigth  = 4.567496;
let w2 = weigth.toFixed(3);
console.log(w2);

//valueOf()
let r = 5656;
console.log(r.valueOf());

