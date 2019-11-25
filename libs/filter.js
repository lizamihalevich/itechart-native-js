var filter = function(arr, callback) {
    if (!Array.isArray(arr)) {
        throw new Error("You should pass an array")
    }
    let newArr = [];
    for (let i = 0; i < arr.length; i += 1) {
        if (callback(arr[i], i, arr)) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
};

export default filter;