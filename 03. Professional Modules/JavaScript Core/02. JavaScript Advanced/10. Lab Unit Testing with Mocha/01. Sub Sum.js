function subsum(arr, start, end) {
    if (!Array.isArray(arr)) {
        return NaN
    }
    start = start < 0 ? 0 : start
    end = end >= arr.length ? arr.length - 1 : end
    let sum = 0
    for (let i = start; i <= end; i++) {
        sum += Number(arr[i])
    }
    return sum
}
// console.log(subsum([10, 20, 30, 40, 50, 60], 3, 300));
