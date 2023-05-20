function calculator(num, operator, secNum) {

    let result = 0
    let firstNum = Number(num);
    let secondNum = Number(secNum);

    switch (operator) {
        case '-': result += firstNum - secondNum;
            break;
        case '+': result += firstNum + secondNum;
            break;
        case '*': result += firstNum * secondNum;
            break;
        case '/': result += firstNum / secondNum;
            break;
    }
    console.log(result.toFixed(2));
}


calculator(5,
    '+',
    10
    )