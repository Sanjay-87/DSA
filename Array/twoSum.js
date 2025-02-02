var twoSum = function (nums, target) {
	for (let i = 0; i < nums.length; i++) {
		let diff = target - nums[i];

		if (nums.includes(diff) && nums.indexOf(diff) !== i) {
			return [i, nums.indexOf(diff)];
		}
	}
};

const nums = [3, 3];
const target = 6;
const result = twoSum(nums, target);
console.log("result --->", result);
