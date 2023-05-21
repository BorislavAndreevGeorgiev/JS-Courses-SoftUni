function soiceMustFlow(spice) {

    let daysCounter = 0;
    let spiceCounter = 0;
    let spiceUse = 0;

    while (spice >= 100) {
        spiceCounter = spice;
        daysCounter++
        spice -= 10;
        spiceUse += spiceCounter - 26;
    }
    let endOfDay = spiceUse - 26
    if(endOfDay <0){
        endOfDay = 0
    }
    console.log(`${daysCounter}`);
    console.log(`${endOfDay}`);

}
soiceMustFlow(450)
