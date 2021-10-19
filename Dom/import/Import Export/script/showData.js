async function getData(url) {

    let res = await fetch(url)
    let data = await res.json()

    return data
}

function append(data, container) {

    data.forEach(({}) => {
        let div = document.createElement("div")
        let p = document.createElement("p")

        p.innerText = meals.strMeal

        // let img = document.createElement("img")

        // img.src = image

        div.append(p)
        container.append(div)

    })
}

export { getData, append }