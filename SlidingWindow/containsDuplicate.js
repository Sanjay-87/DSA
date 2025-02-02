var containsNearbyDuplicate = function (nums, k) {
	const window = new Set();
	let l = 0;

	for (let r = 0; r < nums.length; r++) {
		if (Math.abs(l - r) > k) {
			window.delete(nums[l]);
			l++;
		}

		if (window.has(nums[r])) {
			return true;
		}

		window.add(nums[r]);
	}

	return false;
};

const nums = [1, 2, 3, 1, 2, 3],
	k = 2;
console.log(containsNearbyDuplicate(nums));
