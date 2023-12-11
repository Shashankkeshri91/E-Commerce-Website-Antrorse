// products.js

// Sample product data
export const products = [
    { id: 'product1', name: 'Product 1', price: 120 },
    { id: 'product2', name: 'Product 2', price: 250 },
    // Add more products as needed
];

// products.js

const products = [
    { id: 'product1', name: 'Product 1', image: 'Furniture1.jpg', price: 120 },
    { id: 'product2', name: 'Product 2', image: 'Furniture2.jpg', price: 250 }
];

export function renderProducts() {
    const productContainer = document.getElementById('productContainer');
    productContainer.innerHTML = '';

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.id = product.id;

        productDiv.innerHTML = `
            <div class="furn-product-img">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <p class="price">$${product.price}</p>
            <button class="add-to-cart" onclick="addToCart('${product.id}')">Add to Cart</button>
            <button class="edit" onclick="editItem('${product.id}')">Edit</button>
            <button class="delete" onclick="deleteItem('${product.id}')">Delete</button>
        `;

        productContainer.appendChild(productDiv);
    });
}

export function editItem(productId) {
    // Placeholder for product editing logic
    console.log(`Editing product with ID: ${productId}`);
}

export function deleteItem(productId) {
    // Placeholder for product deletion logic
    console.log(`Deleting product with ID: ${productId}`);
}

