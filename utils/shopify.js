const storefrontAccessToken = process.env.STOREFRONT_ACCESS_TOKEN;
const endpoint = process.env.SHOP_URL;
import { gql, GraphQLClient } from "graphql-request";

export async function queryShopify(query) {
  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      "X-Shopify-Storefront-Access-Token": storefrontAccessToken,
    },
  });
  return await graphQLClient.request(query);
}

export const getAllProductsQuery = gql`
  {
    products(first: 10) {
      edges {
        node {
          id
          title
          handle
          priceRange {
            minVariantPrice {
              amount
            }
          }
          featuredImage {
            altText
            url
          }
        }
      }
    }
  }
`;

export async function getProducts() {
  try {
    const data = await queryShopify(getAllProductsQuery);
    const allProducts = data.products.edges;
    const productsDetails = allProducts.map((product) => {
      return {
        id: product.node.id,
        title: product.node.title,
        handle: product.node.handle,
        price: product.node.priceRange.minVariantPrice.amount,
        image: product.node.featuredImage.url,
        imageAlt: product.node.featuredImage.altText,
      };
    });
    return productsDetails;
  } catch (error) {
    throw new Error(error);
  }
}
getProducts();
