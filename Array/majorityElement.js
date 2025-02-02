const nums = [1, 1, 1, 2, 2, 2, 4, 4];

var majorityElement = function (nums) {
	let candidate = null;
	let count = 0;

	for (let num of nums) {
		if (count === 0) candidate = num;
		count += num === candidate ? 1 : -1;
	}

	return candidate;
};

var majorityElement2 = function (nums) {
	const candidate1 = null,
		candidate2 = null,
		count1 = 0,
		count2 = 0;

	for (let num of nums) {
		if (num === candidate1) {
			count1++;
		} else if (num === candidate2) {
			count2++;
		} else if (count1 === 0) {
			candidate1 = num;
			count1 = 1;
		} else if (count2 === 0) {
			candidate2 = num;
			count2 = 1;
		} else {
			count1--;
			count2--;
		}
	}

	count1 = 0;
	count2 = 0;
	for (let num of nums) {
		if (num === candidate1) count1++;
		else if (num === candidate2) count2++;
	}

	let result = [];
	let threshold = Math.floor(nums.length / 3);

	if (count1 > threshold) result.push(candidate1);
	if (count2 > threshold) result.push(candidate2);

	return result;
};

console.log(majorityElement(nums));
