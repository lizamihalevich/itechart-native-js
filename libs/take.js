const take = (arr, n) => {
    if (!Array.isArray(arr)) {
        throw new Error("You should pass an array")
    }
    return arr.slice(0, n);
}

export default take;