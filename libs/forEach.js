var forEach = function(arr, callback) {
    if (!Array.isArray(arr)) {
        throw new Error("You should pass an array")
    }
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i, arr);
    }
}

export default forEach;