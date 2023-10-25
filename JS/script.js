
// Raccolta dati
const lista = ["pane","latte","uova","pasta","carne"]
let i = 0
const ul = document.querySelector("ul")

while (i < lista.length){
    const prod = lista[i]
    i++
    console.log(prod)
    ul.innerHTML += `<li>${prod}</li>`
}