function addAndSubtract(firstNum,secNum,thirdNum) {

    function sum(firstNum,secNum) {
        return firstNum + secNum
    }
    let sumResult = sum(firstNum, secNum);

    function subtract(sum, thirdNum) {
        return sum - thirdNum;
    }
    return subtract(sumResult, thirdNum);
}

console.log(addAndSubtract(23,6,10));