function domainType(domains: string[]): string[] {
    let tldMap = {
        "com" : "commercial",
        "org" : "organization",
        "info" : "information",
        "net" : "network",
    }
    const tldTypeList: string[] = [];
    for (let i: number = 0; i < domains.length; i++){
        const parts = domains[i].split('.');
        tldTypeList.push(tldMap[parts[parts.length-1]]);
    }
    return tldTypeList;
    // kind of cheating, but hey, a check in is a checkin
}

console.log(domainType(["en.wiki.org", "codefights.com", "happy.net", "code.info"]));