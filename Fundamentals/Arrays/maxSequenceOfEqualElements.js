function maxSequenceOfEqualElements(arr) {

    let sequence = 1;
    let maxSequence = 0;
    let maxSeqNum = 0;

    for (let index = 0; index < arr.length; index++) {

        if (index !== 0) {
            let currentNum = Number(arr[index]);
            let prevNum = Number(arr[index - 1]);

            if (currentNum === prevNum) {
                sequence++;

                if (sequence > maxSequence) {
                    maxSequence = sequence;
                    maxSeqNum = currentNum;
                }
            } else {
                sequence = 1;
            }
        }
    }

    console.log(`${
        (maxSeqNum + ' ').repeat(maxSequence)
    }`);
}
maxSequenceOfEqualElements([
    2,
    1,
    1,
    2,
    3,
    3,
    2,
    2,
    2,
    1
])
