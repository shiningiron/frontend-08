import { useMutation } from '@apollo/client'
import {useState} from 'react'
import { CREATE_PRODUCT, UPDATE_PRODUCT } from './ProductMutation.queries'
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
    const [mycolor,setMycolor] = useState(false)
    
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
            if(event.target.value && name && detail && price){
                setMycolor(true)
            } else {
                setMycolor(false)
            }
        }
    
        const onChangeName = (event) => {
            setName(event.target.value)
            if(seller && event.target.value && detail && price){
                setMycolor(true)
            } else {
                setMycolor(false)
            }
        }
    
        const onChangeDetail = (event) => {
            setDetail(event.target.value)
            if(seller && name && event.target.value && price){
                setMycolor(true)
            } else {
                setMycolor(false)
            }
        }

        const onChangePrice = (event) => {
            setPrice(event.target.value)
            if(seller && name && detail && event.target.value){
                setMycolor(true)
            } else {
                setMycolor(false)
            }

        }

        

        
    
    return (        

            <ProductPageUI
            onClickCreate = {onClickCreate}
            onClickUpdate = {onClickUpdate}
            onChangeSeller = {onChangeSeller}
            onChangeName = {onChangeName}
            onChangePrice = {onChangePrice}
            onChangeDetail = {onChangeDetail}
            mycolor={mycolor}
            isEdit={props.isEdit}
            />
    
    )

}