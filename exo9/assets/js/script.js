let resultat = ""
let longueur = +prompt('Rentrez la longueur de votre kebab (dessous de 30 svp)')

while (isNaN(longueur) || longueur > 30) {
    alert("Vous avez mis une valeur au-dessus de 30 ou ce n'est pas un nombre")
    longueur = +prompt('Rentrez la longueur de votre kebab (dessous de 30 svp)')
}
for (let i = 1; i <= longueur; i++) {
    if (i === 1) {
        resultat = i
    } else {
        resultat = resultat + "-" + i
    }
}


console.log(resultat)