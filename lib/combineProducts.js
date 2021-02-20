const fs = require('fs');
const { combine } = require('combine-json');

/**
 * combines products from the shared/products folder
 * places them in shared/products.json
 */

export default async function combineProducts() {
    const products = await combine('lib/shared/products');
    return products;
}