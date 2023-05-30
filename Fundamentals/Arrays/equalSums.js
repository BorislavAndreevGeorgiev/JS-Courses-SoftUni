function equalSums(arr) {

    let leftSum = 0;
    let rightSum = 0;
    let isEqual = false;
    let arrLength = arr.length

    for (let currIndex = 0; currIndex < arrLength; currIndex++) {
        for (let i = 0; i < arrLength; i++) {
            if (i !== currIndex) {
                let num = Number(arr[i]);
                if (i < currIndex) {
                    leftSum += num;
                } else if (i > currIndex) {
                    rightSum += num;
                }
            }
            if (currIndex === 0) {
                leftSum = 0
            } else if (currIndex === arrLength - 1) {
                rightSum = 0
            }
        }
        if (leftSum === rightSum) {
            console.log(currIndex);
            isEqual = true
        } else {
            leftSum = 0;
            rightSum = 0;
        }
    }
    if (! isEqual) {
        console.log("no");
    }
}

equalSums([1, 2, 3, 3])
