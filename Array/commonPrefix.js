var longestCommonPrefix = function (strs) {
	if (strs.length < 1) return strs[0];
	let longest = strs[0];

	for (let i = 1; i < strs.length; i++) {
		let j = 0;
		while (
			j < longest.length &&
			j < strs[i].length &&
			strs[i][j] === longest[j]
		) {
			j++;
		}

		longest = strs[i].substring(0, j);
	}

	return longest;
};

const strs = ["flower", "flow", "flight"];
const result = longestCommonPrefix(strs);
console.log("result --->", result);
