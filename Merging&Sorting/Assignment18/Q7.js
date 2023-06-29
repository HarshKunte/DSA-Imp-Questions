var lengthOfLIS = function(nums) {
    let maxSubseq = [];

    nums.forEach((num) => {
        let [left, right] = [0, maxSubseq.length]
        while (left < right) {
            const mid = Math.floor((right+left)/2);
            if (maxSubseq[mid] >= num) right = mid;
            else left = mid + 1;
        }

        maxSubseq[left] = num; 
    })
    return maxSubseq.length;
};