function processOddNumbers(array) {

    let arrOddNum = array.filter((el, i) => i % 2 !== 0);
    let sumArrayNum = arrOddNum.map(a => a * 2);
    let arrRevercce = sumArrayNum.reverse()
    console.log(arrRevercce.join(" "));

}

processOddNumbers([3, 0, 10, 4, 7, 3])