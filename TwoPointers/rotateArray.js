var rotate = function(nums, k) {
    let left = nums.slice(0, k + 1);
    let right = nums.slice(k + 1);

    return [...right, ...left]
};

const nums = [1,2,3,4,5,6,7], k = 3;
const result = rotate(nums, k);
console.log({result})