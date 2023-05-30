function maxNumber(arr) {

    let result = "";
    let arrLength = arr.length;

    for (let i = 1; i <= arrLength; i++) {

        let isMax = true;
        let currNumber = Number(arr[i - 1]);

        for (let j = i; j < arrLength; j++) {

            let nextNumber = Number(arr[j])
            if (nextNumber >= currNumber) {
                isMax = false
                break;
            }
        }
        if (isMax) {
            result += `${currNumber} `
        }
    }
    console.log(result);
}

maxNumber([14, 24, 3, 19, 15, 17])
