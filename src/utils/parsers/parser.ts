export type Doc = {
    start: number;
    end: number;
    body: string;
};

export type Line = {
    lineNumber: number;
    code: string;
}

export function parseExpl(text: string) {
    let regex = /(?=\([0-9]+-[0-9]+\))/g;
    return text.split(regex);
}


export function parseCode(input: string) {
    let arr = input.split('\n');
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push([i + 1, arr[i]]);
    }
    return newArr
}
export function parseArrayToText(arrayCode: Array<Line>) {
    let output = '';
    for(let i = 0; i<arrayCode.length; i++){
        output += String(arrayCode[i].lineNumber) +' '+ String(arrayCode[i].code) + '\n';
    }
    return output;
  }

export function getObjectFromOutput(splitOutputData: Doc) {
    
}

// a chunk consists of two numbers [n,m], for start and end inclusive, and non chunked code will

// creates in between chunks for codes that dont have lines

