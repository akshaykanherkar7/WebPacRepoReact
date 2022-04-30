// let search = document.getElementById("search").value;
let getData = async (url) => {
    let res = await fetch(url);
    let data = await res.json();

    return data.meals;
};

let append = (data,container) => {
    data.map(({strMeal,strMealThumb,strInstructions}) => {

        let box = document.createElement("div");

        let title = document.createElement("h2");
        title.setAttribute("id","title");
        title.innerText = strMeal;

        let image = document.createElement("img");
        image.setAttribute("id","image");
        image.src = strMealThumb;

        let desc = document.createElement("h3");
        desc.innerText = strInstructions;

        box.append(image,desc);
        container.append(title,box);
    });
}

export {getData,append};