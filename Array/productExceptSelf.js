var productExceptSelf = function (nums) {
	let res = new Array(nums.length).fill(1);

	let prefix = 1;
	for (let left = 0; left < nums.length; left++) {
		res[left] = prefix;
		prefix *= nums[left];
	}

	let suffix = 1;
	for (let right = nums.length - 1; right >= 0; right--) {
		res[right] *= suffix;
		suffix *= nums[right];
	}

	return res;
};

const nums = [1, 2, 3, 4];
console.log(productExceptSelf(nums));
