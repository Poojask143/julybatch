//if condition ,if else, else if,switch
let items = 40;
// if(){}
//code block
//}

//items greater than or equal to 50
if (items >=50){
    document.write("stock is available");
}

// if else
if (items >=50){
    document.write("stock is available");
}
else{
    document.write("limited is available");
    }

 //else if :multiple cond 
 if (items >=50){
    document.write("stock is available");
    }
 if(items >=20 && items <=50){
    document.write("few items left");

 }
 else if (items >=1 && items <=20){
    document.write(" hurry up ! few stock available");
}
else{
    document.write("out of stock");
}