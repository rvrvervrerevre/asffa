const query = `
{
  product(handle: "kypolight") {
    id
    title
    variants(first: 5) {
      edges {
        node {
          id
          title
          price {
            amount
            currencyCode
          }
          compareAtPrice {
            amount
            currencyCode
          }
        }
      }
    }
  }
}
`;

fetch('https://xk4unk-re.myshopify.com/api/2023-10/graphql.json', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': '63baa61b49d56d7a73a896a7553873af'
    },
    body: JSON.stringify({ query })
})
.then(res => res.json())
.then(json => {
    console.log(JSON.stringify(json, null, 2));
})
.catch(err => console.error(err));
