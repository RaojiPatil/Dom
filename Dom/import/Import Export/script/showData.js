async function getData(url) {

    let res = await fetch(url)
    let data = await res.json()

    return data

}

function append(data, container) {

    data.forEach(({ meals }) => {
        let div = document.createElement("div")
        let p = document.createElement("p")

        p.innerText = meals.strArea


        div.append(p)
        container.append(div)

    })
}

export { getData, append }