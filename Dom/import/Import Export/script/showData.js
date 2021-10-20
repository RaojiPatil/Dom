async function getData(url) {

    let res = await fetch(url)
    let data = await res.json()

    return data
}

function append(data, container) {

    data.forEach(({
        meals: {
            strArea
        }
    }) => {
        let div = document.createElement("div")
        let p = document.createElement("p")

        p.innerText = strArea

        // let img = document.createElement("img")

        // img.src = image

        div.append(p)
        container.append(div)

    })
}

export { getData, append }