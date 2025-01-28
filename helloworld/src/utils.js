function add(a,b) {
    return a+b
}
function substract(a,b) {
    return a-b
}
function multiply(a,b) {
    return a*b
}
function divide(a,b) {
    if(b===0) {
        throw new Error("You can\'t divide by 0")
    }
    return a/b
}

const pi = 3.141592653589793

export {
    add,
    substract,
    multiply,
    divide,
    pi
}