function findEmailDomain(address: string): string {
    const emailSplit = (address.split('@'));
    return emailSplit[emailSplit.length-1];
}

console.log(findEmailDomain('prettyandsimple@example.com'));
console.log(findEmailDomain('<>[]:,;@\"!#$%&*+-/=?^_{}| ~.a\"@example.org'));
