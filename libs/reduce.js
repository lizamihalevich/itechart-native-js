var reduce = function(array, callback, initialValue) {
    if (!Array.isArray(array)) {
        throw new Error("You should pass an array")
    }
    const rec = (arr, acc) => {
        if (!arr.length) {
            return acc;
        }
        const curr = arr[0];
        const nextArr = arr.slice(1);
        const nextAcc = callback(acc, curr);
        return rec(nextArr, nextAcc);
    }
    if (initialValue) {
        return rec(array, initialValue);
    }
    return rec(array.slice(1), array[0]);
}

export default reduce;