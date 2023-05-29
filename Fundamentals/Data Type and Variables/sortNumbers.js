function sortNumbers(num1, num2, num3){

    let arr = [num1 ,num2, num3].sort((a,b)=> a-b).reverse();
    console.log(`${arr[0]} \n${arr[1]} \n${arr[2]}`);

}
