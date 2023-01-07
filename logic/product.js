import { gql, useQuery } from "@apollo/client";

export const GET_PRODUCTS = gql`
query Products($options: JSON, $pageCount: Int, $rowCount: Int) {
  Model {
    Products(options: $options, pageCount: $pageCount, rowCount: $rowCount) {
      pageInfo {
        endCursor
        hasNextPage
        page
        rows
      }
      totalCount
      edges {
        node {
          id
          name
          description
          published
          hidden
          amount
          #specification
          #shipping
          preOrder
          condition
          parentSKU
          SKU
          categoryId
          productCategory {
            name
          }
          productMedias {
            url
          }
          productItems {
            sku
            data
            imgURL
            amount
            quantity
          }
          quantity
        }
      }
    }
  }
}
`;


export function getProducts(options, pageCount = 0, rowCount = 25) {
  const { data, error, loading } = useQuery(GET_PRODUCTS, {variables: {options, pageCount, rowCount}});
  if (error) {
    throw new Error(error);
  }
  return  {data: data?.Model?.Products || undefined, error, loading };
}