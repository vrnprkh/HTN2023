export function parseExpl(text) {
    let regex = /(?=\([0-9]+-[0-9]+\))/g;
    return text.split(regex);
}

export function parseCode(input) {
    let arr = input.split('\n');
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push([i + 1, arr[i]]);
    }
    return newArr
}
export function parseArrayToText(arrayCode) {
    let output = '';
    for(let i = 0; i<arrayCode.length; i++){
        output += String(arrayCode[i][0]) +' '+ String(arrayCode[i][1]) + '\n';
    }
    return output;
  }

// a chunk consists of two numbers [n,m], for start and end inclusive, and non chunked code will

// creates in between chunks for codes that dont have lines

