function orders(product, pcs) {

    let price = 0;

    switch (product) {
        case "coffee": price = 1.50;
            break;
        case "water": price = 1;
            break;
        case "coke": price = 1.40;
            break;
        case "snacks": price = 2
            break
    }

    console.log((price * pcs).toFixed(2));
}


orders("water", 5)
