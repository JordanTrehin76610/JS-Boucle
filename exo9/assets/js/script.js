let resultat = ""

for (let i = 1; i < 11; i++) {
    if (i === 1) {
        resultat = i
    } else {
        resultat = resultat + "-" + i
    }
}

console.log(resultat)