var reduce = function(arr, callback, initialVal) {
    if (!Array.isArray(arr)) {
        throw new Error("You should pass an array")
    }
    var accumulator = (initialVal === undefined) ? undefined : initialVal;
    for (var i = 0; i < arr.length; i += 1) {
        if (accumulator !== undefined)
            accumulator = callback.call(undefined, accumulator, arr[i], i, arr);
        else
            accumulator = arr[i];
    }
    return accumulator;
};

export default reduce;