var groupAnagrams = function (strs) {
	const hashMap = {};

	strs.forEach((str) => {
		const val = str.split("").sort().join("");
		if (hashMap[val]) {
			hashMap[val].push(str);
		} else {
			hashMap[val] = [str];
		}
	});

	return Object.values(hashMap);
};
