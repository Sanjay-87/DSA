var getConcatenation = function (nums) {
  let n = nums.length;
  let res = new Array(n * 2);

  nums.forEach((num, i) => {
    res[i] = num;
    res[i + n] = num;
  });

  return res;
};

const nums = [1, 2, 1];
const result = getConcatenation(nums);
console.log("result --->", result);
