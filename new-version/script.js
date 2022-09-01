const div = document.getElementById('imgs')
const res = document.getElementById('res')
const p = document.createElement('p')
const span = document.createElement('span')
const span2 = document.createElement('span')
const nomePokes = ['','Bulbasaur','Ivysaur', 'Venusaur', 'Charmander', 'Charmeleon', 'Charizard', 'Squirtle', 'Wartortle', 'Blastoise']
const types = [
    {},
    {
        tipo1: 'Grass',
        tipo2: 'Poison'
    },
    {
        tipo1: 'Grass',
        tipo2: 'Poison'
    },
    {
        tipo1: 'Grass',
        tipo2: 'Poison'
    },
    {
        tipo1: 'fire',
    },
    {
        tipo1: 'fire',
    },
    {
        tipo1: 'fire',
        tipo2: 'Flying'
    },
    {
        tipo1: 'walter'
    },
    {
        tipo1: 'walter'
    },
    {
        tipo1: 'walter'
    },
]


for(let c = 1; c < 10; c++){
    const a = document.createElement('a')
    const li = document.createElement('li')
    const img = document.createElement('img')
    a.appendChild(img)
    img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${c}.png`
    img.id = nomePokes[c]
    img.onclick = function (){
        span2.innerHTML = ''
        res.innerHTML = ''
        span.innerHTML = types[c].tipo1
        res.backgroundColor = 'gray'
        const imgtemp = document.createElement('img')
        imgtemp.src = img.src
        imgtemp.style.width = '50%'
        p.innerHTML = img.id
        
        
        if(img.id == 'Bulbasaur' || img.id == 'Ivysaur' || img.id == 'Venusaur'){
                res.style.backgroundColor = 'forestgreen'
                span.style.backgroundColor = 'rgb(3, 71, 3)'
                span2.style.backgroundColor = 'rgb(3, 71, 3)'
            }else{
            if(img.id == 'Charmander' || img.id == 'Charmeleon' || img.id == 'Charizard'){
                res.style.backgroundColor = 'red'
                span.style.backgroundColor = 'rgb(95, 4, 4)'
                span2.style.display = 'none'
            }else{
                if(img.id == 'Squirtle'|| img.id == 'Wartortle'|| img.id =='Blastoise'){
                    res.style.backgroundColor = 'skyblue'
                    span.style.backgroundColor = 'blue'
                    span2.style.display = 'none'
                }
            }
        }

        if(img.id == 'Bulbasaur' || img.id == 'Ivysaur' || img.id == 'Venusaur'|| img.id == 'Charizard'){
            span2.innerHTML = types[c].tipo2
            span2.style.display = 'block'
            span2.style.backgroundColor = 'purple'
        }
        
        if(img.id == 'Charizard'){
            span2.style.backgroundColor = 'skyblue'
        }

        res.appendChild(p)
        res.appendChild(imgtemp)
        res.appendChild(span)
        res.appendChild(span2)
        
    }
    li.appendChild(a)
    div.appendChild(li)
}