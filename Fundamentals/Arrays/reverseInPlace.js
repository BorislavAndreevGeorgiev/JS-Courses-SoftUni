function reverseInPlace(arr){

for(let i = 0; i < arr.length / 2; i++){
    let currentEl = arr[i];
    let reverceEl = arr[arr.length - 1 - i];
    arr[i] = reverceEl
    arr[arr.length - 1 - i] = currentEl
}
console.log(arr.join(" "));

}
reverseInPlace(['abc', 'def', 'hig',
'klm', 'nop'] )