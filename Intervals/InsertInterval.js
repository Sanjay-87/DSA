var insert = function (intervals, newInterval) {
	const result = [];

	for (let interval of intervals) {
		if (newInterval === null || interval[1] < newInterval[0]) {
			result.push(interval);
		} else if (interval[0] > newInterval[1]) {
			result.push(newInterval);
			result.push(interval);
			newInterval = null;
		} else {
			newInterval[0] = Math.min(interval[0], newInterval[0]);
			newInterval[1] = Math.max(interval[1], newInterval[1]);
		}
	}

	if (newInterval) result.push(newInterval);

	return result;
};

// const intervals = [
// 		[1, 3],
// 		[6, 9],
// 	],
// 	newInterval = [2, 5];

const intervals = [
		[1, 2],
		[3, 5],
		[6, 7],
		[8, 10],
		[12, 16],
	],
	newInterval = [4, 8];
const result = insert(intervals, newInterval);
console.log({ result });
