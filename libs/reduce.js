var reduce = function(arr, callback, initialVal) {
    if (!Array.isArray(arr)) {
        throw new Error("You should pass an array")
    }
    var accumulator = initialVal;
    for (var i = 0; i < arr.length; i += 1) {
        if (!accumulator) {
            accumulator = arr[i];
        } else {
            accumulator = callback(accumulator, arr[i], i, arr);
        }
    }
    return accumulator;
};

export default reduce;