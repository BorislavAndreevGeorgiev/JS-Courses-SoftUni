function myMathPow(x,y){

    let result = 1
    for(let i = 0; i < y; i++){
        result = multiplyTwoNums(result, x)
    }
    console.log(result);
}
function multiplyTwoNums(a, b){
    return a * b
}
myMathPow(2, 8)