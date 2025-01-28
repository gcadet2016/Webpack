function add(a: number, b:number): number {
    return a+b
}
function substract(a: number,b: number): number {
    return a-b
}
function multiply(a: number,b: number): number {
    return a*b
}
function divide(a: number,b: number): number {
    if(b===0) {
        throw new Error("You can\'t divide by 0")
    }
    return a/b
}

const pi = 3.141592653589793;

export {
    add,
    substract,
    multiply,
    divide,
    pi
}