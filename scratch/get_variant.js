const query = `
{
  product(handle: "shipping-protection") {
    id
    title
    variants(first: 1) {
      edges {
        node {
          id
          title
          price {
            amount
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
