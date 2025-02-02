var minSubArrayLen = function (target, nums) {
	let minLength = Infinity,
		sum = 0,
		l = 0;

	for (let r = 0; r < nums.length; r++) {
		sum += nums[r];

		while (sum >= target) {
			minLength = Math.min(minLength, r - l + 1);
			sum -= nums[l];
			l++;
		}
	}

	return minLength == Infinity ? 0 : minLength;
};

const target = 11,
	nums = [1, 1, 1, 1, 1, 1, 1, 1];
console.log(minSubArrayLen(target, nums));
