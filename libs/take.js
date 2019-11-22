var take = function(arr, n) {
    if (!Array.isArray(arr)) {
        throw new Error("You should pass an array")
    }
    let newArr = arr.slice(0, n);
    return newArr;
}

export default take;