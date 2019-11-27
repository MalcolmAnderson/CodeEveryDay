function properNounCorrection(noun: string): string {
   const output: string[] = [];
   output.push(noun[0].toUpperCase());
   for(let i: number = 1; i < noun.length; i++){
       output.push(noun[i].toLocaleLowerCase());
   }
   return output.join('');
}

console.log(properNounCorrection('pARiS'));
console.log(properNounCorrection('John'));