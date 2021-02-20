# Stripe Github Products

The goal of this repo is to show how to query the Github REST API using a Netlify serverless function. This serverless function will be hit from Stripe webhook events. The webhook events used are `product.created` and `product.updated`.

## Idea behind this repo

This repo is just to show how someone could with a smaller e-commerce store could use a local `products.json` file without having a CMS installed or without having to directly query Stripe for a products list.
A `products.json` file is useful for us as we can use it to create our static paths. 

## How this works?

1. A product is created on Stripe.
2. A webhook for `product.created` is fired which hits `${WEBSITE_URL}/api/product-create`;
3. If the product gets updated, the webhook for `product.updated` is fired which hits  `${WEBSITE_URL}/api/product-update`.
4. By using serverless functions from Netlify like this, we can fetch other data before creating/updating our file in Github. This means we could do anything from fetching more information about a file, emailing staff, or sending a slack notification. The possibilites are endless.

Please check the `lib/shared/products` folder which shows each file keyed by its product id.

### The product-create serverless function

This function will use `@octokit/rest` to create a file with the `${STRIPE_PRODUCT_ID}.json`.
All of these JSON files are stored in `lib/shared/products`.
I used `combine-json` to combine them in our Nextjs views.  
This webhook will add the file to github and as a result of a new commit being added, it will force a site rebuild which will update our site on Netlify.

### The product-update serverless function

This function will use `@octokit/rest` to update a file with the `${STRIPE_PRODUCT_ID}.json`.
This webhook will add the file to github and as a result of a new commit being added, it will force a site rebuild which will update our site on Netlify.

## Issues?

1. Github API Rate Limiting
2. I could not find a GraphQL Github API endpoint similar to the REST API endpoint so I will have to wait for that.
3. The `Product` object from Stripe does not contain any pricing information. Ideally we need all of the `Price` objects which means we need to make more queries.
   
   
This is simply a repo for fun to show how this might work. If anyone has any feedback then please do get in touch. Thank you.