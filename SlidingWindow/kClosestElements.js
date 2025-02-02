// Given a sorted integer array arr, two integers k and x, return the k closest integers to x in the array. The result should also be sorted in ascending order.

// An integer a is closer to x than an integer b if:

// |a - x| < |b - x|, or
// |a - x| == |b - x| and a < b

var findClosestElements = function(arr, k, x) {
    let l = 0; r = arr.length - 1;

    while (r - l >= k) {
        if (Math.abs(arr[l] - x) > Math.abs(arr[r] - x)) {
            l++
        } else {
            r--
        }
    };

    return arr.slice(l, r+1)
};

const arr = [1,2,3,4,5], k = 4, x = 3;
console.log(findClosestElements(arr, k, x))