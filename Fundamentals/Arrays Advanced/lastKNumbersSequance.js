function lastKNumbersSequance(n, k) {

    let sumArray = [1];

    while(n > sumArray.length){
        let kArr = sumArray.slice( - k);
        let sum = 0;
            for( let i = 0; i < kArr.length; i++){
                sum += kArr[i];
            }
        sumArray.push(sum);    
    }
    console.log(sumArray.join(" "));
}

lastKNumbersSequance(6, 3 )