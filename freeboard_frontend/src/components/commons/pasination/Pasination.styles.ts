import styled from "@emotion/styled";

interface IProps {
  isActive?: boolean;
}

export const PageBox = styled.div`
  display: flex;
  align-items: center;
  height: 100px;
`;

export const PageArrow = styled.div`
  padding: 10px;
`;

export const PageNum = styled.div`
  padding: 10px;
  color: ${(props: IProps) => (props.isActive ? "#7b68ee" : "#fff")};
  /* font-size: ${(props: IProps) => (props.isActive ? "30px" : "20px")}; */
  @-webkit-keyframes tilt {
    0% {
      transform: rotate(0deg) translate3d(0, 0, 0);
    }
    100% {
      transform: rotate(10deg) translate3d(0, 0, 0);
    }
  }

  @keyframes tilt {
    0% {
      transform: rotate(-15deg) translate3d(0, 0, 0);
    }
    100% {
      transform: rotate(15deg) translate3d(0, 0, 0);
    }
  }

  :hover {
    font-size: 30px;
    animation: tilt 1s linear 0s infinite alternate;
    -webkit-animation: tilt 1s linear 0s infinite alternate;
  }
`;
