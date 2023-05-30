function addAndSubtract(input) {

    let sumOldArray = 0;
    let sumNewArray = 0;
    let arrayLength = input.length

    for (let index = 0; index < arrayLength; index++) {
        let currNum = Number(input[index]);

        sumOldArray += currNum;
        if (currNum % 2 === 0) {
            currNum += index;
        } else {
            currNum -= index;
        } input[index] = currNum;
        sumNewArray += currNum;

    }
console.log(input);
console.log(sumOldArray);
console.log(sumNewArray);

}

addAndSubtract([
    5,
    15,
    23,
    56,
    35
])
