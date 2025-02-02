var longestConsecutive = function (nums) {
	if (nums.length === 0) return 0;
	const res = new Set(nums);
	let maxLength = 0;

	for (let num of res) {
		if (!res.has(num - 1)) {
			let current = num;
			let currentLength = 1;

			while (res.has(current + 1)) {
				current++;
				currentLength++;
			}

			maxLength = Math.max(maxLength, currentLength);
		}
	}

	return maxLength;
};

const nums = [100, 4, 200, 1, 3, 2];
console.log(longestConsecutive(nums));
