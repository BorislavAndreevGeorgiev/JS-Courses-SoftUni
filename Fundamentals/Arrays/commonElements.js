function commonElements(firstArr, secondArr){

    let firstArrLength = firstArr.length;

    for(let index = 0; index < firstArrLength; index++){

        let currEl = firstArr[index]
        if(secondArr.includes(currEl)){
            console.log(currEl);
        }
    }

}

commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'],['Petar', 10, 'hey', 4, 'hello', '2'])