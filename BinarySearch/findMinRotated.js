var findMin = function (nums) {
	let left = 0,
		right = nums.length - 1;

	while (left < right) {
		let mid = Math.floor((left + right) / 2);

		// If the middle element is smaller than the rightmost element,
		// the minimum is in the left half (including mid).
		if (nums[mid] < nums[right]) {
			right = mid;
		}
		// If the middle element is greater than the rightmost element,
		// the minimum must be in the right half.
		else {
			left = mid + 1;
		}
	}

	// Left and right converge to the minimum element
	return nums[left];
};

// const nums = [3, 4, 5, 1, 2];
const nums = [4, 5, 6, 7, 0, 1, 2];
console.log(findMin(nums));
