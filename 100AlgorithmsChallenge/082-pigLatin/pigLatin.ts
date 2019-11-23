function pigLatin(str: string): string {
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
