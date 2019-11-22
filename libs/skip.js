var skip = function(arr, n) {
    if (!Array.isArray(arr)) {
        throw new Error("You should pass an array")
    }
    let newArr = arr.slice(n);
    return newArr;
}

export default skip;