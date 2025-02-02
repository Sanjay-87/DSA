var subarraySum = function (nums, k) {
	const hash = new Map();
	let count = 0;

	let sum = 0;
	for (let num of nums) {
		sum += num;

		if (hash.has(sum - k)) {
			count += hash.get(sum - k);
		}

		hash.set(sum, (hash.get(sum) || 0) + 1);
	}

	return count;
};

const nums = [1, 1, 1];
const k = 2;
console.log(subarraySum(nums, k));
