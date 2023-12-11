// index.js

import { renderProducts, editItem, deleteItem } from './products.js';
import { addToCart, checkout } from './cart.js';
import { processPayment } from './payment.js';

document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
});

// Event listeners and coordination logic (customize as needed)
document.getElementById('editButton').addEventListener('click', () => {
    const productId = prompt('Enter product ID to edit:');
    editItem(productId);
});

document.getElementById('deleteButton').addEventListener('click', () => {
    const productId = prompt('Enter product ID to delete:');
    deleteItem(productId);
});

document.getElementById('addToCartButton').addEventListener('click', () => {
    const productId = prompt('Enter product ID to add to cart:');
    addToCart(productId);
});

document.getElementById('checkoutButton').addEventListener('click', () => {
    checkout();
});

document.getElementById('processPaymentButton').addEventListener('click', () => {
    processPayment();
});

