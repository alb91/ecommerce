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

// First Prompt
firstProduct = prompt("Ingresa el nombre del artículo que deseas:");
// Look for item in object
firstProduct = items.find(object => object.name == firstProduct);
console.log(firstProduct.name + " agregado.")
// Remove one item from stock
firstProduct.quantity = firstProduct.quantity -1;
console.log(firstProduct.quantity + " en Stock.");
// Check for offer availability
if (firstProduct.offer) {
    discountedPrice = firstProduct.price * .20;
    firstProduct.price = firstProduct.price - discountedPrice;
    console.log("Tienes un descuento del 20% en este producto!")
}

// Second Prompt
secondProduct = prompt("Puede agregar otro artículo o escribir 'pagar' si ha finalizado.");
if (secondProduct != "pagar"){
    // Look for item in object
    secondProduct = items.find(object => object.name == secondProduct);
    // Remove one item from stock
    secondProduct.quantity = secondProduct.quantity - 1;
    console.log(secondProduct.name + " agregado")
    console.log(secondProduct.quantity + " en Stock.")
} 

// While Condition
while (secondProduct != "pagar") {
    // Check for offer
    if (secondProduct.offer) {
    discountedPrice = secondProduct.price * .20;
    secondProduct.price = secondProduct.price - discountedPrice;
    console.log("Tienes un descuento del 20% en este producto!")
}
    // Price addition - Amount moved to first product.
    firstProduct.price = firstProduct.price + secondProduct.price
    secondProduct = prompt("Puede agregar otro artículo o escribir 'pagar' si ha finalizado.");
    // if 'pagar' break and move to total amount.
    if (secondProduct == "pagar") {
        break
    }
    // Look for item in object
    secondProduct = items.find(object => object.name == secondProduct);
    console.log(secondProduct.name + " agregado")
    // Remove item from stock
    secondProduct.quantity = secondProduct.quantity - 1;
    // Condition if 0 stock.
    if (secondProduct.quantity == 0) {
        console.log(secondProduct.name + " no está en existencia. Puede agregar otro artículo o escribir 'pagar' si ha finalizado.")
    } else {
        console.log(secondProduct.quantity + " en Stock.")
    }
    
    
    
    
    
} 
// Print total amount
console.log("Su total es: $" + firstProduct.price + " dólares.");







