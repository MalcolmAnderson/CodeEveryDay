function htmlEndTagByStartTag(startTag: string): string {
    let startingPosition: number = startTag.indexOf('<');
    let payload: string = startTag.substring(startingPosition + 1, getEndingPosition(startTag, startingPosition));
    return startTag + '</' + payload + '>';
}

function getEndingPosition(startTag: string, indexOfLessThan: number): number{
    let indexOfGreaterThan: number = startTag.indexOf('>');
    let firstSpaceAfterStartingPosition: number = startTag.indexOf(' ', indexOfLessThan);
    const spaceNotFoundinTag: boolean = firstSpaceAfterStartingPosition === -1;
    return spaceNotFoundinTag ? indexOfGreaterThan : firstSpaceAfterStartingPosition;
}

console.log(htmlEndTagByStartTag("<button type='button' disabled>"));
console.log(htmlEndTagByStartTag(" <button type='button' disabled>"));
console.log(htmlEndTagByStartTag('<i>'))
