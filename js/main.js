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

// Objects - Items

// Most Popular Items
const  items = [{
    name: "iphone",
    idNumber: 0,
    inStock: true,
    quantity: 5,
    price: 499.00,
    offer: false

},
{
    name: "sgn20",
    idNumber: 1,
    inStock: true,
    quantity: 5,
    price: 399.00,
    offer: false

},
{
    name: "macbookpro",
    idNumber: 2,
    inStock: true,
    quantity: 5,
    price: 1299.00,
    offer: false

},
{
    name: "sony headphones",
    idNumber: 3,
    inStock: true,
    quantity: 5,
    price: 199.00,
    offer: false

},

// Offers
{
    name: "remote control",
    idNumber: 5,
    inStock: true,
    quantity: 5,
    price: 59.00,
    offer: true

},

{
    name: "nintento switch",
    idNumber: 6,
    inStock: true,
    quantity: 5,
    price: 299.00,
    offer: true

},

{
    name: "keyboard",
    idNumber: 7,
    inStock: true,
    quantity: 5,
    price: 89.00,
    offer: true

},

{
    name: "logitech mouse",
    idNumber: 8,
    inStock: true,
    quantity: 5,
    price: 149.00,
    offer: true

},

{
    name: "Mac",
    idNumber: 9,
    inStock: true,
    quantity: 5,
    price: 1699.00,
    offer: true

},

// Best Rated Items
{
    name: "Huawei phone",
    idNumber: 10,
    inStock: true,
    quantity: 5,
    price: 799.00,
    offer: false

},

{
    name: "iphone 7",
    idNumber: 11,
    inStock: true,
    quantity: 5,
    price: 649.00,
    offer: false

},

{
    name: "Ipad Air",
    idNumber: 12,
    inStock: true,
    quantity: 5,
    price: 729.00,
    offer: false

},

{
    name: "gameboy",
    idNumber: 13,
    inStock: true,
    quantity: 5,
    price: 49.00,
    offer: false

},

{
    name: "play station 1",
    idNumber: 14,
    inStock: true,
    quantity: 5,
    price: 299.00,
    offer: false

}];

// Variables
let firstProduct
let secondProduct
let discountedPrice
let soldItems


// First Prompt
debugger

firstProduct = prompt("Selecciona un artículo.")
for (let item of items) {
    
    while (firstProduct === item.name && item.inStock) {
        console.log(item.name);
        console.log(item.quantity --);
        console.log(item.price);
        secondProduct = prompt("Selecciona otro artículo o escribe 'pagar' para finalizar.")
        if (secondProduct === "pagar") {
        break;
        }

        
        firstProduct = secondProduct;
    
    }

    
}



