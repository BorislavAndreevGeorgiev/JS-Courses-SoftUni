function BinaryToDecimal(binary) {
    let decimal = 0;
    let binaryLength = binary.length;
    for (let i = binaryLength - 1; i >= 0; i--) {
        if (binary[i] === '1') 
            decimal += Math.pow(2, binaryLength - 1 - i);
        
    }
    return decimal;
    console.log(decimal);
}


BinaryToDecimal(101000)