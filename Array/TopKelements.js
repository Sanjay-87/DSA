var topKFrequent = function (nums, k) {
	const hash = {};
	const res = [];

	for (let num of nums) {
		hash[num] = (hash[num] || 0) + 1;
	}

	let arr = Object.entries(hash).map(([num, freq]) => [freq, parseInt(num)]);
	arr.sort((a, b) => b[0] - a[0]);

	for (let num of arr) {
		if (res.length < k) {
			res.push(num[1]);
		} else {
			break;
		}
	}

	return res;
};

const nums = [4, 1, -1, 2, -1, 2, 3],
	k = 2;
console.log(topKFrequent(nums, k));
