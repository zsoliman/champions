const classSelector = document.getElementById('class-select')
const baseImgUrl = 'https://www.dndbeyond.com/attachments/thumbnails/0/'
const portraitMap = {
    'fighter':
        'wizard':
    'barbarian':
        'warlock':
    'bard':
        'cleric':
    'monk':
        'paladin':
    'druid':
        'ranger':
    'rogue':
}

let request = async () => {
    // initiate request to dnd server
    let req = await fetch('https://www.dnd5eapi.co/api/classes/')
    // get response from server and convert it to JSON
    let res = await req.json()
    res.results.forEach((char) => {
        let option = document.createElement('option')
        option.setAttribute('value', char.name)
        option.innerText = char.name
        classSelector.append(option)
    });

    classSelector.addEventListener('change', (e) => {
        document.getElementById('selected-class').innerText = e.target.value
        let img = document.createElementById('img')
        img.src = `${baseImgUrl}${portraitMap[e.target.value]}`
        img.setAttribute('width', '400px')
        img.setAttribute('height', '400px')
        document.body.append(img)

    })
}

// the request function will now automatically load
request()