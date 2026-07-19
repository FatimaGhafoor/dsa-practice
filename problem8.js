// Count Positive Numbers in Array

const arr = [1, 2, 3, 4];
let count = 0;
for(let num of arr){
    if(num>0) count++;
}

console.log(count);