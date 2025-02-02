var mergeAlternately = function(word1, word2) {
    let count = 0;
    let res = ''

    while (word1.length > count || word2.length > count) {
        if (word1.length > count) {
            res += word1[count]
        }

        if (word2.length > count) {
            res += word2[count]
        }

        count++
    };

    return res;
};

const word1 = "abc", word2 = "pqr";
const result = mergeAlternately(word1, word2);
console.log({result})