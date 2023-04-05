// const {content} = require 
const cardcontent = JSON.parse(content)
sec = document.getElementById("container");

cardcontent.forEach((element) =>{
    outputCard(element);
} );
 
function outputCard(elem){
    article = document.createElement("article");
    sec.appendChild(article);
    image = document.createElement("img");
    image.src = "images/" + elem.filename;
    image.alt = elem.title;
    article.appendChild(image);
    div = document.createElement("div");
    div.className = "caption";
    h2 = document.createElement("h2");
    h2.innerHTML = elem.title;
    div.appendChild(h2);
    p = document.createElement("p");
    p.innerHTML = elem.location.city + ", " + elem.location.country;
    div.appendChild(p);
    h3 = document.createElement("p");
    h3.innerHTML = "Colors"
    div.appendChild(h3);
    outputcolors(div, elem.colors);
    article.appendChild(div);
}

function outputcolors(elem, colors){
    var x;
    for(let element of colors){
        x = document.createElement("span");
        x.innerHTML = constructColor(element);
        x.style = constructStyle(element);
        elem.appendChild(x);
    }


}

function constructColor(color){
    return color.name;
}


function constructStyle(color){
    var x;
    if (color.luminance < 70){
        return "background-color: " + color.hex + " ;color: white" ;
    }
    else{
        return "background-color: " + color.hex ;
    }
}