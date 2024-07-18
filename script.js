const arr = [2, 11, 34, 65, 41, 8, 26, 12, 9, 54, 43];
const newArr = [];

for(let i = 0; i < arr.length; i++) {
    if(arr[i] % 2 === 0) {
       newArr.push(arr[i]);
    }
}

console.log(newArr);







