import styled from "@emotion/styled";
import { IoIosHeart, IoIosHeartEmpty } from "react-icons/io";

const BasketBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90px;
`;
export const Heart = styled(IoIosHeartEmpty)`
  font-size: 2rem;
  cursor: pointer;
  color: #fff;
  /* ${(props: any) => (props.isCancel ? "#ff00e6" : "#fff")}; */
`;
export const HeartY = styled(IoIosHeart)`
  font-size: 2rem;
  cursor: pointer;
  color: #ff00e6;
  /* ${(props: any) => (props.isCancel ? "#ff00e6" : "#fff")}; */
`;
export default function Pick(props: any) {
  return (
    <>
      {props.isPick ? (
        <BasketBox>
          <HeartY onClick={props.onClickPick} />
          <span>{props.data?.fetchUseditem.pickedCount}</span>
        </BasketBox>
      ) : (
        <BasketBox>
          <Heart onClick={props.onClickPick} />
          <span>{props.data?.fetchUseditem.pickedCount}</span>
        </BasketBox>
      )}
    </>
  );
}
