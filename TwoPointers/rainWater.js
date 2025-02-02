var maxArea = function (height) {
	let area = 0,
		l = 0,
		r = height.length - 1;

	while (l < r) {
		let minHeight = Math.min(height[l], height[r]);
		area = Math.max(area, minHeight * Math.abs(r - l));

		if (height[l] < height[r]) {
			l++;
		} else {
			r--;
		}
	}

	return area;
};

const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log(maxArea(height));
