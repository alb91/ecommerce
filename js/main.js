// Owl-Carousel

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:5,
            nav:true,
            loop:false
        }
    }
})



// // Array Items
// // const arrayItems = ["iphone", "sgn20", "macbookpro", "sony headphones", "remote control", "nintento switch", "keyboard", "logitech mouse", "mac", "huawei phone", "iphone 7", "ipad Air", "gameboy", "play station 1"];
// // const addedItems = [];
// // DOM 
// // Enlistar artículos.
// const itemList = document.getElementById("itemList");
// const cartItems = document.getElementById("cartItems");

// function loadItems() {
//     itemList.innerHTML = "";
//     for (const arrayItem of arrayItems) {
//         const li = document.createElement("li");
//         li.innerText = arrayItem;
//         li.id = arrayItem + "Prod";
//         li.addEventListener("click", ()=> { addItemCart(`${li.innerText}`)});
//         itemList.append(li);

//     }

// };

// loadItems();
// // Agregar al carrito.
// function addItemCart(prod) {
//     if (prod.trim() !== "") {
//         addedItems.push(prod)
//         const liNewItem = document.createElement("li");
//         liNewItem.innerText = prod;
//         liNewItem.addEventListener("dblclick", ()=> {removeFromCart(`${liNewItem.id}`)});
//         cartItems.append(liNewItem);
//     }

// };

// addItemCart();
// // Remover del carrito. 
// function removeFromCart(prod) {
//     const removeItem = document.getElementById(`${prod}`);
//     removeItem.remove();
//     console.warn(`${prod} ha sido removido del carrito` );
// }

// removeFromCart();


// Creación de Tabla

// const title = document.getElementsByClassName("title");
// const owlContainer = document.getElementsByClassName("owl-container");
// const owlCarousel = document.getElementsByClassName("owl-carousel");


// const table = document.createElement("table");
// function loadItems() {
//     debugger
//     owlCarousel.innerHTML = "";
//     for (const item of items) {
//         const tr = document.createElement("tr");
//         const td = document.createElement("td");

//         tr.append(item.name);
//         td.append(item.idNumber, item.inStock, item.quantity, item.price);
//         table.append(tr);
//         table.append(td);
//         table.addEventListener("click", ()=> { cartItems((`${table.innerText}`))})

        

        

//     }

// }

// loadItems();

// // Agregar al carrito 

// function cartItems(item) {
//     if (item !== "") {
//         cart.push(item.name)
//         const liCartItem = document.createElement("li");
//         liCartItem.innerText = item.name;

        
//     }
// }

//Calcular precio de artículos, agregar impuesto y checar si el artículo tiene descuento.

// let total = 0;
// do {
//     firstProduct = prompt("Selecciona un artículo o escribe 'pagar' para finalizar.").toLocaleLowerCase(); 
//     for (let item of items) {
//         if (firstProduct === item.name) {
//             //Descuento
//             if (item.offer == true) {
//             discountedPrice = item.price * DISCOUNT
//             item.price = item.price - discountedPrice;
//             }
//         let itemTotal = item.price * TAX;
//         total = total + itemTotal;
//         };
        

//     };
// } while (firstProduct !== "pagar");
// console.log(total.toFixed(2) + " dólares.");


// // Búsqueda de artículo. 

// function searchItem() {

//     let aSearch = prompt("Ingrese el artículo que desea buscar:").toLowerCase();
//     let result = items.find((item) => item.name.includes(aSearch));
//     if (result !== undefined) {
//     console.log(result.name);
//     } else {
//         console.log("Artículo no disponible.")
//     }
// }
// searchItem();



