function lowerOrUpper(input){

let result = '';

    if(input === input.toUpperCase()){
        result = 'upper-case';
    }else{
        result = 'lower-case'
    }
console.log(result);
}

lowerOrUpper('A')