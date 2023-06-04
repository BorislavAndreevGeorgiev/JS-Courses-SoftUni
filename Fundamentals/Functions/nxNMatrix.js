function nxNMatrix(num) {
   
    for(let i = 1; i <= num;i++){
        let row = "";
        for(let y = 1; y <=num;y++){
            row += `${num} `
        }
        console.log(row);
    }

}

nxNMatrix(7)