var mySqrt = function(x) {
    let l = 0, r = x, res = 0;

    while (l <= r) {
        let m = Math.floor((l + r) / 2);
        let srt = m * m;

        if (srt > x) {
            r = m - 1;
        } else if (srt < x) {
            l = m + 1;
            res = m;
        } else {
            return m;
        }
    }

    return res
};

console.log({x: 4, res: mySqrt(4)});
console.log({x: 8, res: mySqrt(8)});
