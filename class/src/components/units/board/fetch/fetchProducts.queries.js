import {gql} from "@apollo/client"

export const FETCH_PRODUCTS = gql`
    query fetchProducts( $page: Int ){
        fetchProducts( page: $page ){
            _id
            seller
            name
            detail
            price
            createdAt
        }
    }
`