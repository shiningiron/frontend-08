import { useState } from "react";
import { useMutation, gql } from "@apollo/client";
import { useRouter } from 'next/router'

const CREATE_PRODUCT = gql`
    mutation createProduct($seller: String, $createProductInput: CreateProductInput!){
        createProduct(seller: $seller, createProductInput: $createProductInput){
            _id
            number
            message
        }
    }
`;

export default function DynamicRoutingPage() {
    const router = useRouter()
    const [seller, setSeller] = useState("");
    const [title, setTitle] = useState("");
    const [detail, setDetail] = useState("");
    const [price, setPrice] = useState("");
    const [createProduct] = useMutation(CREATE_PRODUCT);
    
    const onChangeSeller = (event) => {
        setSeller(event.target.value);
    };
    const onChangeTitle = (event) => {
        setTitle(event.target.value);
    };
    const onChangeDetail = (event) => {
        setDetail(event.target.value);
    };
    const onChangePrice = (event) => {
        setPrice(event.target.value);
    };

    
    const onClickSubmit = async() => {
        try {
            const result = await createProduct ({
                variables: {
                    seller: seller,
                    createProductInput: {
                        name: title,
                        detail: detail,
                        price: Number(price)
                    }
                }
            })
            router.push(`/quiz/05-02-dynamic-routed-product-query/${result.data.createProduct._id}`)
            console.log(result.data.createProduct._id)
        }
        catch (error) {
            console.log(error.message)
            alert("실패했습니다!!")
        }
    
    };
        
    return (
        <>
            판매자: <input type="text" onChange={onChangeSeller} />
            상품명: <input type="text" onChange={onChangeTitle} />
            상품내용: <input type="text" onChange={onChangeDetail} />
            상품가격: <input type="text" onChange={onChangePrice} />
            <button onClick={onClickSubmit}>상품등록</button>
        </>
    );
}
