function parseExpl(text) {
    let regex = /(?=\([0-9]+-[0-9]+\))/g;
    return text.split(regex)
}
export default parseExpl

