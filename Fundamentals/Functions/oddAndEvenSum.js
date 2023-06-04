function oddAndEvenSum(num) {

    let numToString = num.toString();
    let oddSum = 0;
    let evenSum = 0;
    let numLength = numToString.length;

    for(let index = 0; index < numLength; index++) {

        let currentNum = Number(numToString[index]);

        if(currentNum % 2 === 0){
            evenSum += currentNum;
        }else{
            oddSum += currentNum;
        }
    }
    return `Odd sum = ${oddSum}, Even sum = ${evenSum}`
}

console.log(oddAndEvenSum(1000435));