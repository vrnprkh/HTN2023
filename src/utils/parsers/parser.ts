export type Doc = {
    start: number;
    end: number;
    body: string;
};

export type Line = {
    lineNumber: number;
    code: string;
}

export function parseExpl(text: any) {
    let regex = /(?=\([0-9]+-[0-9]+\))/g;
    return text.split(regex);
}


export function parseCode(input: string) {
    const arr = input.split('\n');
    const newArr: Line[] = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push({
            lineNumber: i + 1,
            code: arr[i]
        });
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

export function getDocFromOutput(splitOutputData: Array<string>) {
    const regex = /[0-9]+-[0-9]+/i; 
    const newArr: Doc[] = [] 
    splitOutputData.forEach(element => {
        const rangeString = element.match(regex)
        if (rangeString != null) {
            const range = rangeString[0].split('-')
            newArr.push({
                start: parseInt(range[0]),
                end: parseInt(range[1]),
                body: element
            })
        }

    });
    return newArr
}

// a chunk consists of two numbers [n,m], for start and end inclusive, and non chunked code will

// creates in between chunks for codes that dont have lines

