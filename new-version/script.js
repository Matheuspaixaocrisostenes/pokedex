const div = document.getElementById('imgs')
const res = document.getElementById('res')
const p = document.createElement('p')
const nomePokes = ['','Bulbasaur','Ivysaur', 'Venusaur', 'Charmander', 'Charmeleon', 'Charizard', 'Squirtle', 'Wartortle', 'Blastoise']
const types = []


for(let c = 1; c < 10; c++){
    const a = document.createElement('a')
    const li = document.createElement('li')
    const img = document.createElement('img')
    a.appendChild(img)
    img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${c}.png`
    img.id = nomePokes[c]
    img.onclick = function (){
        res.innerHTML = ''
        const imgtemp = document.createElement('img')
        imgtemp.src = img.src
        imgtemp.style.width = '50%'
        p.innerHTML = img.id
        res.appendChild(p)
        res.appendChild(imgtemp)
    }
    li.appendChild(a)
    div.appendChild(li)
}