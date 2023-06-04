function loadingBar(number) {

    let percentCounter = number / 10;
    let restPoints = 10 - percentCounter;

    if(percentCounter === 10){
        console.log(`100% Complete!`);
    }else{
        console.log(`${number}% [${'%'.repeat(percentCounter)}${'.'.repeat(restPoints)}]`);
        console.log(`Still loading...`);
    }

}

loadingBar(90)