function factorialDivision(numOne, numTwo) {

    function factorial(number) {

        if (number === 0) {
            return 1;
        } else {
            return number * factorial(number - 1)
        }

    }

    let firstNumberFactorial = factorial(numOne);
    let secondNumberFactorial = factorial(numTwo);
    let result = firstNumberFactorial / secondNumberFactorial;

    console.log(result.toFixed(2));
}

factorialDivision(5, 2)
