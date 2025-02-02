var fourSum = function(nums, target) {
    nums.sort((a, b) => a - b);
    const result = []

    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        for (let j = i+1; j < nums.length; j++) {
            if (j > i+1 && nums[j] === nums[j - 1]) continue;
            let l = j + 1;
            let r = nums.length - 1;

            while (l < r) {
                let currSum = nums[i] + nums[j] + nums[l] + nums[r];

                if (currSum === target) {
                    result.push([nums[i], nums[j], nums[l], nums[r]]);
                    l++;
                    r--;
                    while (l < r && nums[l] === nums[l - 1]) l++;
                    while (l < r && nums[r] === nums[r + 1]) r--;
                } else if (currSum < target) {
                    l++
                } else {
                    r--
                }
            }
        }
    };

    return result;
};

const nums = [1,0,-1,0,-2,2], target = 0;
const result = fourSum(nums, target);
console.log({result})