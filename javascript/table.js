function addNumber(){
    let number = parseInt(prompt("Enter the number"));
    for(let i = 1;i <=10; i++) {
        let res = number * 1;
        console.log(res);
        document.write(res,'<br>');
    }
    document.getElementById("table").innerHTML=res +'<br>'

}