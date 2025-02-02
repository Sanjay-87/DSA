var searchMatrix = function(matrix, target) {
    let left = 0, right = matrix.length - 1;

    while (left <= right) {
        let m = Math.floor((left + right) / 2);

        if (matrix[m].includes(target)) {
            return true
        } else if (matrix[m][0] < target) {
            left = m + 1
        } else {
            right = m - 1
        }
    }

    return false
};

const matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3;
console.log(searchMatrix(matrix, target))