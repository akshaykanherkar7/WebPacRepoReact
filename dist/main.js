(()=>{"use strict";let e;document.getElementById("navbar").innerHTML='<h3>\n    <a href="/">Home</a>\n</h3>\n<div id="options">\n    <h3>\n        <a href="/recipe.html">Recipe</a>\n    </h3>\n    <h3>\n        <a href="/login.html">LogIn</a>\n    </h3>\n    <h3>\n        <a href="/signin.html">SignUp</a>\n    </h3>\n</div>';const t=async()=>{let e=document.getElementById("search").value;try{const t=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${e}`),a=await t.json();""===e?document.getElementById("details").innerHTML=null:n(a.meals)}catch(e){console.log("err:",e)}};let n=e=>{e.map((({strMeal:e,strMealThumb:t,strInstructions:n})=>{let a=document.createElement("div"),i=document.createElement("h2");i.setAttribute("id","title"),i.innerText=e;let l=document.createElement("img");l.setAttribute("id","image"),l.src=t;let m=document.createElement("h3");m.innerText=n,a.append(l,m),document.getElementById("details").append(i,a)}))};document.getElementById("search").addEventListener("input",(function(){a(t,1e3)}));let a=(t,n)=>{e&&clearTimeout(e),e=setTimeout((function(){t()}),n)},i=JSON.parse(localStorage.getItem("userdata"));document.getElementById("username").innerText=i})();