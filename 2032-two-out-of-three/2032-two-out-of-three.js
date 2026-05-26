
 var twoOutOfThree = function(nums1, nums2, nums3) {
    let result = [];

    let set1 = new Set(nums1);
    let set2 = new Set(nums2);
    let set3 = new Set(nums3);

    let all = new Set([...set1,...set2,...set3]);

    for (let num of all) {

        let count = 0;

        if (set1.has(num)) count++;
        if (set2.has(num)) count++;
        if (set3.has(num)) count++;

        if (count >= 2) {
            result.push(num);
        }
    }

    return result;
};