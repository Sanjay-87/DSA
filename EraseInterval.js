var eraseOverlapIntervals = function (intervals) {
	intervals.sort((a, b) => a[0] - b[0]);
	let count = 0;
	let [currStart, currEnd] = intervals[0];

	for (let i = 0; i < intervals.length; i++) {
		let [start, end] = intervals[i];

		if (start <= currEnd) {
			count++;
			currStart = intervals[i + 1]?.[0];
			currEnd = intervals[i + 1]?.[1];
		}
	}

	return count;
};

const intervals = [
	[1, 2],
	[2, 3],
	[3, 4],
	[1, 3],
];
const result = eraseOverlapIntervals(intervals);
console.log({ result });
