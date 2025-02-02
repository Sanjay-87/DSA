var threeSum = function(nums) {
    nums.sort((a, b) => a - b);
    const result = []

    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            let currSum = nums[i] + nums[left] + nums[right];

            if (currSum === 0) {
                result.push([nums[i], nums[left], nums[right]]);
                left++;
                right--;
                while (left < right && nums[left] === nums[left - 1]) {
                    left++;
                }
            } else if (currSum < 0) {
                left++
            } else {
                right--
            }
        }
    };

    return result
};

const nums = [-1,0,1,2,-1,-4];
console.log(threeSum(nums))