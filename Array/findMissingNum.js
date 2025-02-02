var missingNumber = function (nums) {
	const min = Math.min(...nums);
	const max = Math.max(...nums);
	const expectedSum = ((nums.length + 1) / 2) * (min + max);
	const actualSum = nums.reduce((acc, cumm) => (acc += cumm), 0);

	return expectedSum - actualSum;
};

const nums = [3, 0, 1];
console.log(missingNumber(nums));
