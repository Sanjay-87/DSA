function isRotatedSorted(nums) {
	let count = 0;
	let n = nums.length;

	for (let i = 0; i < n; i++) {
		// Check if current element is greater than the next (using modulo for circular array)
		if (nums[i] > nums[(i + 1) % n]) {
			count++;
		}
	}

	console.log({ count });
	// If count > 1, it's not a rotated sorted array
	return count <= 1;
}

// Example usage:
console.log(isRotatedSorted([3, 4, 5, 1, 2])); // true (rotated sorted)
// console.log(isRotatedSorted([2, 1, 3, 4])); // false (not rotated sorted)
// console.log(isRotatedSorted([1, 2, 3])); // true (sorted, not rotated)
// console.log(isRotatedSorted([1, 1, 1])); // true (all same elements)
// console.log(isRotatedSorted([2, 3, 4, 5, 1])); // true (rotated sorted)
// console.log(isRotatedSorted([3, 2, 1, 5, 4])); // false (not rotated sorted)
