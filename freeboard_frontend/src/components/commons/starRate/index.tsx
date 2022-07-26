import { Rate } from "antd";
import styled from "@emotion/styled";
import "antd/dist/antd.css";
import { useState } from "react";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const StarRating = styled(Rate)`
  color: #c800ff;
  /* background-color: #6600ff; */
`;

interface IStarRateProps {
  //   desc: number;
  setRating: any;
  //   el: any;
  //   rating: number;
}

export default function StarRate(props: IStarRateProps) {
  const [value, setValue] = useState(2);
  // console.log(value);
  //   const desc = [1, 2, 3, 4, 5];
  const abc = (value) => {
    setValue(value);
    props.setRating(value);
  };

  return (
    <Wrapper>
      <StarRating onChange={abc} value={value} />
      {/* {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ""} */}
    </Wrapper>
  );
}
