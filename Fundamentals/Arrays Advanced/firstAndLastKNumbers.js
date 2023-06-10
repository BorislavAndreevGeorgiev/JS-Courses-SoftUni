function firstAndLastKNumbers(arr) {

 let kNums = arr.shift();
 let firstK = arr.slice(0, kNums)
 let lastK = arr.slice(arr.length- kNums)

 console.log(firstK.join(' '));
 console.log(lastK.join(' '));

}

firstAndLastKNumbers([3,6, 7, 8, 9])