var lengthOfLongestSubstring = function (s) {
	const charSet = new Set();
	let l = 0,
		length = 0;

	for (let r = 0; r < s.length; r++) {
		while (charSet.has(s[r])) {
			charSet.delete(s[l]);
			l++;
		}

		charSet.add(s[r]);
		length = Math.max(length, r - l + 1);
	}

	return length;
};

const s = "abcabcbb";
console.log(lengthOfLongestSubstring(s));
