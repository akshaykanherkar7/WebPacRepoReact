import navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML = navbar();

let id;

const main = async () => {
   let search = document.getElementById("search").value;
    try{
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);

        const data = await res.json();
        if(search === "")
        {
            document.getElementById("details").innerHTML = null;
        }
        else
        {
            // console.log('data:', data);
            appendData(data.meals);
        }
        
    }catch(err){
        console.log('err:', err)
    }
};

let appendData = (data) => {    
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
        document.getElementById("details").append(title,box);
    })
};

let searchevent = document.getElementById("search")
searchevent.addEventListener("input",function(){
    debounce(main,1000);
})

let debounce = (func, delay) => {
    if(id)
    {
        clearTimeout(id);
    }
    id = setTimeout(function(){
        func();
    },delay)
};

let username = JSON.parse(localStorage.getItem("userdata"));
document.getElementById("username").innerText = username;
