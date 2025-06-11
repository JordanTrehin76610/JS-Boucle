let nb1 = 3
let nb2 = 6

while (nb1 + nb2 < 2025) {
    console.log(nb1 + nb2)
    nb2 = nb2 + (nb1 + nb2)
}

console.log("Et le finish vaut: " + (nb2 + nb1))