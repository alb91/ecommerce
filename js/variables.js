// Constants
const TAX = 1.16;
const DISCOUNT = .20;
// Variables
let firstProduct
let secondProduct
let discountedPrice
let soldItems

// Adding cart items.
const cartItemsList = document.createElement("Cart Items");


// Form

const inputName = document.querySelector("#inputName");
const inputPhone = document.querySelector("#inputPhone");
const inputEmail = document.querySelector("#inputEmail");
const btnSubmit = document.querySelector("#submit");

let inputData = "";