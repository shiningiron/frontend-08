import {gql} from "@apollo/client"

export const DELETE_PRODUCT = gql`
    mutation deleteProduct($productId: ID){
    deleteProduct(productId:$productId){
            _id
            number
            message
  }
}
`