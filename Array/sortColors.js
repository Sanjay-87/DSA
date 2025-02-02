var sortColors = function (nums) {
	let left = 0;
	let mid = 0;
	let right = nums.length - 1;

	while (mid <= right) {
		switch (nums[mid]) {
			case 0: {
				[nums[left], nums[mid]] = [nums[mid], nums[left]];
				left++;
				mid++;
				break;
			}
			case 1: {
				mid++;
				break;
			}
			case 2: {
				[nums[right], nums[mid]] = [nums[mid], nums[right]];
				right--;
				break;
			}
		}
	}

	return nums;
};

const nums = [2, 0, 2, 1, 1, 0];
const result = sortColors(nums);
console.log("result --->", result);
