const skip = (arr, n) => {
    if (!Array.isArray(arr)) {
        throw new Error("You should pass an array")
    }
    return arr.slice(n);
}

export default skip;