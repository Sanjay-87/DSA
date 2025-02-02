var findMaxAverage = function(nums, k) {
    let left = 0;
    let currentSum = 0;
    let maxAvg = 0; 

    for (let i = 0; i < k; i++) {
        currentSum += nums[i];
    }

    maxAvg = currentSum / k;

    for (let i = k; i < nums.length; i++) {
        currentSum = (currentSum + nums[i]) - nums[left];
        maxAvg = Math.max(maxAvg, currentSum / k);
        left++;
    }

    return maxAvg
};

const nums = [5], k = 1;
console.log(findMaxAverage(nums, k))