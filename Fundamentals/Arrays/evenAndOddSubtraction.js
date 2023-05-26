function evenAndOddSubtraction(numbs){

    let odd = 0;
    let even = 0;

    for(let num of numbs){
        if(num % 2 === 0){
            even += num
        }else{
            odd += num
        }
    }
    let result = even - odd
    console.log(result);

}
evenAndOddSubtraction([3,5,7,9] )