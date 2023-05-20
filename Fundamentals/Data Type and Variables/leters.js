function leters(num) {

    for (let step1 = 0; step1 < num; step1++) {
        for (let step2 = 0; step2 < num; step2++) {
            for (let step3 = 0; step3 < num; step3++) {
                console.log(String.fromCharCode(97 + step1) + String.fromCharCode(97 + step2) + String.fromCharCode(97 + step3));
            }
        }
    }
}
leters(3)