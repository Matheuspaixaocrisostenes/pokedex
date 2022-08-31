const div = document.getElementById('res')

for(let c = 1; c < 10; c++){
    const li = document.createElement('li')
    const img = document.createElement('img')
    img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${c}.png`
    li.appendChild(img)
    div.appendChild(li)
}
