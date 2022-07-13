import { useQuery,gql } from '@apollo/client'
import { FETCH_PRODUCT } from './ProductFetch.queries'
import { useRouter } from 'next/router'
import ProductDetailUI from './ProductDetailPage.presenter'

export default function ProductDetail (){

    const router = useRouter()

    const {data} = useQuery(FETCH_PRODUCT,{
        variables: { productId: router.query.id }
    })

    console.log(data)

    const onClickMoveToEdit = () => {
        router.push(`/quiz/08-products/${router.query.id}/edit`)
    }

    return <ProductDetailUI
        ID = {router.query.id}
        data = {data}
        onClickMoveToEdit = {onClickMoveToEdit}
    />
    
}

