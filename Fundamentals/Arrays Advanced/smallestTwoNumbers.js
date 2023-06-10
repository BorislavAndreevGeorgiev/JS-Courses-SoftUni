function smallestTwoNumbers(data) {

    let sortArray = data.sort((a, b) => a-b);
    let towNumbers = sortArray.slice(0, 2)
    return (towNumbers.join(" "));

}

console.log(smallestTwoNumbers([30, 15, 50, 5]))