function longestConsecutive(numbers) {
    let numSet = new Set(numbers);
    let maxLen = 0;
    
    for (let num of numSet) {
        if(!numSet.has(num - 1)) {
            let currNum = num;
            let currLen = 1;
            
            while(numSet.has(currNum + 1)) {
                currNum++;
                currLen++;
            }
            
            maxLen = Math.max(maxLen, currLen);
        }
    }
    
    return maxLen;
}

const arr = [ 5, 9, 10, 39, 25, 11, 6];
const arr2 = [9, 10, 11];

console.log(longestConsecutive(arr))
console.log(longestConsecutive(arr2))