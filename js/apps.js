// Set ID
function setID() {
    for (const item of items) {
        element = document.createElement("div");
        element.setAttribute("Id", item.name);
        nameId = element;
    }

}

//Set Image
function setImage() {
    for (const item of items) {
        element = document.createElement("img");
        element.setAttribute("src", item.imageId)
        imageId = element;
    }

}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function generateDivs() {
    let carousel = document.querySelector("main");
        carousel.innerHTML = "";
        for (const item of items) {
            setID();
            setImage();
            const assignValues = 
                                `<div class="owl-carousel owl-theme card">
                                        <div id=${items.nameId} class="card-body">
                                            <img src="${items.imageId}" alt="${item.name}")}>
                                            <h5 class="card-title"}>${capitalizeFirstLetter(item.name)}</h5>
                                            <p>Price: $${item.price} dollars.</p>
                                            <button type="button" onclick="addItemToCart()" class="btn btn-primary" id="${items.nameId}">Add</button>
                                        </div>
                                    </div>
                                </div>`
                                carousel.innerHTML += assignValues;
    };
}

generateDivs();

function addItemToCart() {
    let carousel = document.querySelector("section");
    carousel.innerHTML = "";
    for (const item of items) {
        document.getElementById(`${items.nameId}`);
        addedCartItems = item.name;
        const ul = document.createElement("ul");
        ul.className = "list-group";
        const li = document.createElement("li");
        li.className = "list-group-item"
        carousel.innerHTML += addedCartItems;
        
    }


};



