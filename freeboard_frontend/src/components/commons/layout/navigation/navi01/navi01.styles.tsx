import styled from "@emotion/styled";
import { BsBox } from "react-icons/bs";
import { AiOutlineDollarCircle } from "react-icons/ai";
import {
  IoEarthOutline,
  IoPersonOutline,
  IoBagHandleOutline,
} from "react-icons/io5";
import { TbLayoutBoard } from "react-icons/tb";

interface Props {
  toggle: boolean;
}

export const Wrapper = styled.div`
  position: fixed;
  inset: 3.3rem 3.3rem 3.3rem 1.3rem;
  width: ${(props: Props) => (props.toggle ? "250px" : "80px")};
  background: #6400ff;
  border-left: 0.67rem solid #6400ff;
  transition: 0.5s;
  overflow: hidden;
  border-radius: ${(props: Props) => (props.toggle ? "20px" : "50px")};
  box-shadow: 1rem 1rem 1rem rgba(0, 0, 0, 0.1);
  z-index: 2;

  h2 {
    color: #fff;
  }

  /* ul li:hover:not(:first-child) a {
    color: #365fa1;
  } */
`;

export const ListWrapper = styled.ul`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`;

export const List = styled.li`
  position: relative;
  width: 4rem;
  width: 100%;
  border-top-left-radius: 2rem;
  border-bottom-left-radius: 2rem;
  list-style: none;
  &:hover {
    background: #fff;
    color: #222;
  }
  &:nth-child(1) {
    top: 1.3rem;
    margin-bottom: 2.7rem;
    background: none;
  }
  &:not(:first-of-type):hover::before {
    content: "";
    position: absolute;
    top: -1.3rem;
    right: 0;
    width: 1.3rem;
    height: 1.3rem;
    background: transparent;
    border-bottom-right-radius: 1.3rem;
    box-shadow: 0.3rem 0.3rem 0 0.3rem #fff;
  }
  &:not(:first-of-type):hover::after {
    content: "";
    position: absolute;
    bottom: -1.3rem;
    right: 0;
    width: 1.3rem;
    height: 1.3rem;
    background: transparent;
    border-top-right-radius: 1.3rem;
    box-shadow: 0.3rem -0.3rem 0 0.3rem #fff;
  }
`;
export const Link = styled.a`
  position: relative;
  display: block;
  width: 100%;
  display: flex;
  text-decoration: none;
  color: #fff;
`;
export const IconBox = styled.span`
  position: relative;
  display: block;
  min-width: 4rem;
  height: 4rem;
  line-height: 4.67rem;
  text-align: center;
`;
export const TitleBox = styled.span`
  position: relative;
  display: block;
  padding: 0 0.67rem;
  height: 4rem;
  line-height: 4rem;
  text-align: start;
  white-space: nowrap;
`;
export const LogoIcon = styled(BsBox)`
  font-size: 1.75em;
`;
export const HomeEarthIcon = styled(IoEarthOutline)`
  font-size: 1.75em;
`;
export const PersonIcon = styled(IoPersonOutline)`
  font-size: 1.75em;
`;
export const BoardsIcon = styled(TbLayoutBoard)`
  font-size: 1.75em;
`;
export const UsedMarket = styled(IoBagHandleOutline)`
  font-size: 1.75em;
`;
export const Payment = styled(AiOutlineDollarCircle)`
  font-size: 1.75em;
`;
export const ToggleMenu = styled.div`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  width: 3.3rem;
  height: 3.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.5rem;
  cursor: pointer;
  background: #fff;
  border-radius: 50%;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.15);

  &::before {
    content: "";
    position: absolute;
    width: 1.73rem;
    height: 0.2rem;
    border-radius: 0.13rem;
    background: #365fa1;
    transform: ${(props: Props) =>
      props.toggle ? `translateY(0px) rotate(-405deg)` : `translateY(-5px)`};
    transition: 1s;
  }
  &::after {
    content: "";
    position: absolute;
    width: 1.73rem;
    height: 0.2rem;
    border-radius: 0.13rem;
    background: #365fa1;
    transform: ${(props: Props) =>
      props.toggle ? `translateY(0px) rotate(225deg)` : `translateY(5px)`};
    transition: 1s;
  }

  &:active::before {
    transform: translateY(0px) rotate(-405deg);
  }
  &:active::after {
    transform: translateY(0px) rotate(225deg);
  }
`;
