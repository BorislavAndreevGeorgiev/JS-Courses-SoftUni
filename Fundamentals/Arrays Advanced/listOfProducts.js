function listOfProducts(list) {

   let sprted = list.sort()

    for(let i = 0; i < list.length; i++){

        console.log(`${i + 1}.${list[i]}`);
    } 
}

listOfProducts(['Potatoes', 'Tomatoes', 'Onions','Apples'])