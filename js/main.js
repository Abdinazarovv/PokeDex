var elList = document.querySelector("#list");

for (const item of pokemons) {
    var pokemonItem = document.createElement("Li");
    pokemonItem.classList = "d-flex flex-column align-items-center col-3 mb-4"
    
    var pokemonDiv = document.createElement("Div");
    pokemonDiv.classList = "bg-white align-content-center py-0 px-5 rounded-3 shadow shadow"
    
    var pokemonImg = document.createElement("Img");
    pokemonImg.classList = "d-block";
    pokemonImg.setAttribute("src", item.img);
    pokemonImg.setAttribute("alt", "image");
    pokemonImg.setAttribute("width", "200");
    pokemonImg.setAttribute("height", "200");
    
    var pokemonH3 = document.createElement("H3");
    pokemonH3.classList = "mb-3";
    pokemonH3.textContent = item.name;
    
    var pokemonH4 = document.createElement("H4");
    pokemonH4.classList = "h6";
    pokemonH4.textContent = item.type;
    
    var pokemonP1 = document.createElement("P");
    pokemonP1.classList.add("h6");
    pokemonP1.textContent = item.weight;
    
    var pokemonP2 = document.createElement("P");
    pokemonP2.classList.add("h6");
    pokemonP2.textContent = item.height;

    var newTIME = document.createElement("time")
    newTIME.textContent = item.spawn_time;
    
    pokemonDiv.appendChild(pokemonImg);
    pokemonDiv.appendChild(pokemonH3);
    pokemonDiv.appendChild(pokemonH4);
    pokemonDiv.appendChild(pokemonP1);
    pokemonDiv.appendChild(pokemonP2);
    
    pokemonItem.appendChild(pokemonDiv)
    elList.appendChild(pokemonItem)
    
}