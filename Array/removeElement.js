var removeElement = function (nums, val) {
	let k = 0;
	for (let num of nums) {
		if (num !== val) {
			nums[k++] = num;
		}
	}
	return k;
};

const nums = [3, 2, 2, 3];
const val = 3;
const result = removeElement(nums, val);
console.log({ result });
