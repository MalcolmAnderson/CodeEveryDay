// Dylan's version
function htmlEndTagByStartTag(startTag: string): string {
    const splitString = startTag.split(' ');
    const splitTag = splitString[0].toString().split('');
    let endTag = '</';
    for (let i: number = 1; i < splitTag.length; i++) {
        endTag += splitTag[i];
    }
    endTag = endTag[endTag.length - 1] == '>' ? endTag : endTag += '>';
    return endTag;
}





function htmlEndTagByStartTag_mine(startTag: string): string {
    let startingPosition: number = startTag.indexOf('<');
    let payload: string = startTag.substring(startingPosition + 1, getEndingPosition(startTag, startingPosition));
    return '</' + payload + '>';
}

function getEndingPosition(startTag: string, indexOfLessThan: number): number {
    let indexOfGreaterThan: number = startTag.indexOf('>');
    let firstSpaceAfterStartingPosition: number = startTag.indexOf(' ', indexOfLessThan);
    const spaceNotFoundinTag: boolean = firstSpaceAfterStartingPosition === -1;
    return spaceNotFoundinTag ? indexOfGreaterThan : firstSpaceAfterStartingPosition;
}

console.log(htmlEndTagByStartTag("<button type='button' disabled>"));
console.log(htmlEndTagByStartTag('<i>'))
