function characterParity(symbol: string): string {
   let candidate: number = parseInt(symbol);
   if(isNaN(candidate)){
       return "not a digit";
   }
   if(0 === candidate%2){
       return "even";
   } else {
       return "odd";
   }
}

console.log(characterParity('5'));
console.log(characterParity('8'));
console.log(characterParity('q'));

console.log(parseInt("m"));
console.log(isNaN(5));
