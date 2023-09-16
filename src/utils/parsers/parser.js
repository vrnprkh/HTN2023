export function parseExpl(text) {
    let regex = /(?=\([0-9]+-[0-9]+\))/g;
    return text.split(regex);
}

export function parseCode(input) {
    let arr = input.split('\n');
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        newArr.push([i + 1, arr[i]])
    }
    return newArr
}