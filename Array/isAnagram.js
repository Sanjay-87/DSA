var isAnagram = function (s, t) {
	if (s.length !== t.length) return false;
	const sHash = new Map();

	for (let str of s) {
		sHash.set(str, (sHash.get(str) || 0) + 1);
	}

	for (let str of t) {
		if (!sHash.has(str) || sHash.get(str) === 0) return false;
		sHash.set(str, sHash.get(str) - 1);
	}

	return true;
};

const s = "aacc";
const t = "ccac";
const result = isAnagram(s, t);
console.log("result --->", result);
