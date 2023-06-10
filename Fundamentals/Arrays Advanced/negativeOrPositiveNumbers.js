function negativeOrPositiveNumbers(array) {

    let newArr = [];

    for (let el of array) {
        el = Number(el);
        if (el < 0) {
            newArr.unshift(el);
        } else {
            newArr.push(el);
        }
    }

    for(let el of newArr){
        console.log(el);
    }

}

negativeOrPositiveNumbers(['3', '-2', '0', '-1'])
