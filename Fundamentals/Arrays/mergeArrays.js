function mergeArrays(firstArr, secondArr) {

    let thirdArr = [];
    let firstArrLength = firstArr.length;

    for (let index = 0; index < firstArrLength; index++) {
        if (index % 2 === 0) {
            thirdArr[index] = Number(firstArr[index]) + Number(secondArr[index]);
        } else {
            thirdArr[index] = firstArr[index] + secondArr[index];
        }
    }
    console.log(thirdArr.join(' - '));
}
mergeArrays([
    '5',
    '15',
    '23',
    '56',
    '35'
], [
    '17',
    '22',
    '87',
    '36',
    '11'
])
