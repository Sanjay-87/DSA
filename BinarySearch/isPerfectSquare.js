var isPerfectSquare = function(num) {
    if (num === 1) return true
    let l = 0, r = num - 1;

    while (l <= r) {
        let m = Math.floor((l + r) / 2);

        if (m * m === num) {
            return true;
        } else if (m * m < num) {
            l = m + 1;
        } else {
            r = m - 1;
        }
    }

    return false
};

const num = 16