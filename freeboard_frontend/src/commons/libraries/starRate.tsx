import { Rate } from 'antd'
import styled from '@emotion/styled'
import 'antd/dist/antd.css'
import { useState } from 'react'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`
const StarRating = styled(Rate)``



export default function LibraryStarRatePage () {



    const [value, setValue] = useState(2);
    console.log(value)
    const desc = ['1점', '2점', '3점', '4점', '5점'];
    const abc = (value) => {
        setValue(value)
        alert(`${value}점`)
    }
    
    return(
        <Wrapper>
            <StarRating onChange={abc} value={value}/>
            {value ? <span className="ant-rate-text" >{desc[value - 1]}</span> : ''}
        </Wrapper>
    )

}
