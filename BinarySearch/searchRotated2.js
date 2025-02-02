var search = function (nums, target) {
	let left = 0,
		right = nums.length - 1;

	while (left <= right) {
		let mid = Math.floor((left + right) / 2);

		if (nums[mid] === target) return true;

		if (nums[mid] === nums[right] && nums[mid] === nums[left]) {
			left++;
			right--;
			continue;
		}

		// Check if the left half is sorted
		if (nums[left] <= nums[mid]) {
			if (target >= nums[left] && target < nums[mid]) {
				right = mid - 1; // search in the left half
			} else {
				left = mid + 1; // search in the right half
			}
		} else {
			// Otherwise, the right half must be
			if (target > nums[mid] && target <= nums[right]) {
				left = mid + 1; // search in the right half
			} else {
				right = mid - 1; // search in the left half
			}
		}
	}

	return false;
};

const nums = [2, 5, 6, 0, 0, 1, 2],
	target = 0;
console.log(search(nums, target));
