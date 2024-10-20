function canNest(arr1, arr2) {
    function min(arr) {
        let min = Math.min(...arr);
        return min;
    }
    function max(arr) {
        let max = Math.max(...arr);
        return max;
    }
    let minArr1 = min(arr1);
    let maxArr1 = max(arr1);
    let minArr2 = min(arr2);
    let maxArr2 = max(arr2);

    return (minArr1 >= minArr2 && maxArr2 >= maxArr1);
}

console.log(canNest([1, 2, 3, 4], [0, 6]));