var merge = function (intervals) {
	intervals.sort((a, b) => a[0] - b[0]);
	const result = [];
	let [currStart, currEnd] = intervals[0];

	for (let i = 0; i < intervals.length; i++) {
		let [start, end] = intervals[i];

		if (start <= currEnd) {
			currEnd = Math.max(end, currEnd);
		} else {
			result.push([currStart, currEnd]);
			currStart = start;
			currEnd = end;
		}
	}

	result.push([currStart, currEnd]);

	return result;
};

const intervals = [
	[1, 4],
	[0, 2],
	[3, 5],
];
const intervals1 = [
	[1, 3],
	[2, 6],
	[8, 10],
	[15, 18],
];
const result = merge(intervals1);
console.log({ result });
