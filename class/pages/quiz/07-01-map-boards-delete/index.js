import { useQuery, useMutation, gql } from '@apollo/client'
import styled from '@emotion/styled'

const FETCH_PRODUCTS = gql`
    query fetchProducts{
        fetchProducts{
            _id
            seller
            name
            detail
            price
        }
    }
`

const DELETE_PRODUCT = gql`
    mutation deleteProduct($productId: ID){
    deleteProduct(productId:$productId){
            _id
            number
            message
  }
}
`

const Row = styled.div`
    width: 100%;
    display: flex;
`
const Column = styled.div`
    width: 90%;
    /* font-size: 26px; */
`

export default function deleteProductsPage(){


    const {data} = useQuery(FETCH_PRODUCTS)
    const [deleteProduct] = useMutation(DELETE_PRODUCT)
    console.log (data)
   

    const onClickDelete = async (event) => {
        try{
            const result = await deleteProduct({
                variables: { productId: (event.target.id) },
                refetchQueries: [{query: FETCH_PRODUCTS}]
            })
            console.log(result.data)
            console.log(event.target)
        }catch (error){
            console.log(error)
        }
    } 



    return(
        <>
        {data?.fetchProducts.map((el ) => (
            // <Fragment key={el.number}>
            <Row key={el._id}>
                <Column><input type="checkbox" /></Column>
                <Column>{el._id}</Column>
                <Column>{el.seller}</Column>
                <Column>{el.name}</Column>
                <Column>{el.detail}</Column>
                <Column>{el.price}</Column>
                <Column>
                    <button id={el._id} onClick={onClickDelete}>삭제</button>
                </Column>
            </Row>
        ))}
    </>
    )

}
