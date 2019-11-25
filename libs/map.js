const map = (arr, callback) => {
    if (!Array.isArray(arr)) {
        throw new Error("You should pass an array")
    }
    let newArr = [];
    for (let i = 0; i < arr.length; i += 1) {
        newArr.push(callback(arr[i]))
    }
    return newArr;
}

export default map;