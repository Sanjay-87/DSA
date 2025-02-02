var maxProfit = function (prices) {
	let max = 0,
		buy = Infinity;
	prices.forEach((price) => {
		buy = Math.min(buy, price);
		max = Math.max(max, price - buy);
	});

	return max;
};

const prices = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices));
