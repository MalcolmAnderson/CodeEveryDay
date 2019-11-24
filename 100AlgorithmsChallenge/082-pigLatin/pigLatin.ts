// dylan's version
function pigLatin(str: string): string {
    const letters: string[] = str.split('');
    const vowelRegex: RegExp = /[aeiou]/;
    if (vowelRegex.test(str[0])){
        return `${str}way`;
    }
    while(true){
        if(!vowelRegex.test(letters[0])){
            const firstConsonant = letters.splice(0, 1)[0];
            letters.push(firstConsonant)
        } else {
            break;
        }
    }
    str = letters.join('') + 'ay';
    return str;
}


function pigLatin_v2(str: string): string {
    const igpayAtinLay: string[] = [];
    let locationOfFirstVowel = getFirstVowel(str);
    if(locationOfFirstVowel === 0){
        return str.concat("way");
    } else {
        const stem: string[] = [];
        for(let i: number = 0; i < str.length; i++){
            if(i < locationOfFirstVowel){
                stem.push(str[i]);
            } else {
                igpayAtinLay.push(str[i]);
            }
        }
        igpayAtinLay.push(stem.join(''));
        igpayAtinLay.push('ay');
        igpayAtinLay.push('ay');
    }
    return igpayAtinLay.join('');
}

function pigLatin_v1(str: string): string {
    const igpayAtinLay: string[] = [];
    let locationOfFirstVowel = getFirstVowel(str);
    if(locationOfFirstVowel === 0){
        return str.concat("way");
    } else {
        for(let i: number = locationOfFirstVowel; i < str.length; i++){
            igpayAtinLay.push(str[i]);
        }
        for(let i: number = 0; i < locationOfFirstVowel; i++){
            igpayAtinLay.push(str[i]);
        }
        igpayAtinLay.push('ay');
    }
    return igpayAtinLay.join('');
}


function getFirstVowel(igpayAtinLay: string): number{
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    for(let i: number = 0; i < igpayAtinLay.length; i++){
        if(vowels.has(igpayAtinLay[i])){
            return i;
        }
    }
}

console.log(pigLatin("glove")); // "oveglay"
console.log(pigLatin("eight")); // "eightway"
console.log(pigLatin("stream")); // "eamstray"

console.log(pigLatin_v2("glove")); // "oveglay"
console.log(pigLatin_v2("eight")); // "eightway"
console.log(pigLatin_v2("stream")); // "eamstray"

console.log(pigLatin_v1("glove")); // "oveglay"
console.log(pigLatin_v1("eight")); // "eightway"
console.log(pigLatin_v1("stream")); // "eamstray"
