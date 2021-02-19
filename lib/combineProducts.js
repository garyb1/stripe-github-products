const fs = require('fs');
const { combine } = require('combine-json');

/**
 * combines products from the shared/products folder
 * places them in shared/products.json
 */

async function combineProducts() {
    const products = await combine('../stripe-github-products/shared/products');
    fs.writeFileSync('./shared/products.json', JSON.stringify(products, null, 2));
}

combineProducts();