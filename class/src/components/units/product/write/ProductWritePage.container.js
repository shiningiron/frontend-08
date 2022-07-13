import { useMutation, useQuery } from '@apollo/client'
import {useState} from 'react'
import { CREATE_PRODUCT, UPDATE_PRODUCT } from './ProductMutation.queries'
import { FETCH_PRODUCT } from '../detail/ProductFetch.queries'
import { useRouter } from 'next/router'
import ProductPageUI from './ProductWritePage.presenter'




export default function ProductWrite(props){
    const [seller, setSeller] = useState("")
    const [name, setName] = useState("")    
    const [detail, setDetail] = useState("")
    const [price, setPrice] = useState("")
    const [createProduct] = useMutation(CREATE_PRODUCT)
    const [updateProduct] = useMutation(UPDATE_PRODUCT)
    const router = useRouter()

        const {data} = useQuery(FETCH_PRODUCT,{
            variables: { productId: router.query.id }
        }) 
        console.log(data)

     
        const onClickCreate = async() => {
            const result = await createProduct({
                variables: {
                    seller,
                    createProductInput:{
                        name,
                        detail,
                        price: Number(price)
                    }
                }
            })
            console.log(result)
            console.log(result.data.createProduct.message)
            router.push(`/quiz/08-products/${result.data.createProduct._id}`)
        }

        const onClickUpdate = async () => {
            const result = await updateProduct({
                variables: {
                    productId: router.query.id,
                    updateProductInput: {
                        name,
                        detail,
                        price: Number(price)
                    }
                }
            })
            console.log(router)
            router.push(`/quiz/08-products/${result.data.updateProduct._id}`)
            //router.push(`/quiz/08-products/${router.query.id}`) --> 이것도 가능@@
        }
    
        const onChangeSeller = (event) => {
            setSeller(event.target.value)
        }
    
        const onChangeName = (event) => {
            setName(event.target.value)
        }
    
        const onChangeDetail = (event) => {
            setDetail(event.target.value)
       }

        const onChangePrice = (event) => {
            setPrice(event.target.value)
        }

        

        
    
    return (        

            <ProductPageUI
            onClickCreate = {onClickCreate}
            onClickUpdate = {onClickUpdate}
            onChangeSeller = {onChangeSeller}
            onChangeName = {onChangeName}
            onChangePrice = {onChangePrice}
            onChangeDetail = {onChangeDetail}
            data = {data}
            isEdit={props.isEdit}
            />
    
    )

}