function namesdom() {
    let pronoun = ['the', 'our'];
    let adj = ['great', 'big'];
    let noun = ['jogger', 'racoon'];

    for (let index = 0; index < pronoun.length; index++) {
        for (let i = 0; i < adj.length; i++) {
            for (let e = 0; e < noun.length; e++) {
                console.log(pronoun[index] + adj[i] + noun[e] + ".com");
            }
        }
    }
}

console.log(namesdom());
