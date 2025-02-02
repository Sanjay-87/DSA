var twoSum = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        const sum = nums[left] + nums[right];

        if (sum > target) {
            right--;
        } else if (sum < target) {
            left++;
        } else {
            return [left + 1, right + 1];
        }
    }

    return []
};

const numbers = [2,7,11,15], target = 9;
const result = twoSum(numbers, target);
console.log({result})