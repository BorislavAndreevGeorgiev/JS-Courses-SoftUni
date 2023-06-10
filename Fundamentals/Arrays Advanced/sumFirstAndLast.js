function sumFirstAndLast(array) {

    let lastNum = Number (array.pop());
    let result = Number (array[0]) + lastNum

    console.log(result);

}

sumFirstAndLast(['20', '30', '40'] )