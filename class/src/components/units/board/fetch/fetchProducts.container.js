import { useQuery } from "@apollo/client";
import { FETCH_PRODUCTS } from "./fetchProducts.queries";
import FetchProductsUi from "./fetchProducts.presenter";

const Row = styled.div`
    width: 25%;
    display: flex;
`
const Column = styled.div`
    width: 25%;

`
export default function SearchProductsPage (){
    
    const {data} = useQuery(FETCH_PRODUCTS)
    console.log(data)


    return(
        
        <FetchProductsUi
            Row={Row}
            Column={Column}
        />

    )
}
