import styled from "@emotion/styled";
import { BsBox } from "react-icons/bs";
import { IoEarthOutline, IoPersonOutline } from "react-icons/io5";
import { TbLayoutBoard } from "react-icons/tb";

interface Props {
  toggle: boolean;
}

export const Wrapper = styled.div`
  position: fixed;
  inset: 50px 50px 50px 20px;
  width: ${(props: Props) => (props.toggle ? "250px" : "80px")};
  background: #6400ff;
  border-left: 10px solid #6400ff;
  transition: 0.5s;
  overflow: hidden;
  border-radius: ${(props: Props) => (props.toggle ? "20px" : "50px")};
  box-shadow: 15px 15px 15px rgba(0, 0, 0, 0.1);

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
  width: 60px;
  width: 100%;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  list-style: none;
  &:hover {
    background: #fff;
    color: #222;
  }
  &:nth-child(1) {
    top: 20px;
    margin-bottom: 40px;
    background: none;
  }
  &:not(:first-of-type):hover::before {
    content: "";
    position: absolute;
    top: -20px;
    right: 0;
    width: 20px;
    height: 20px;
    background: transparent;
    border-bottom-right-radius: 20px;
    box-shadow: 7.5px 7.5px 0 7.5px #fff;
  }
  &:not(:first-of-type):hover::after {
    content: "";
    position: absolute;
    bottom: -20px;
    right: 0;
    width: 20px;
    height: 20px;
    background: transparent;
    border-top-right-radius: 20px;
    box-shadow: 7.5px -7.5px 0 7.5px #fff;
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
  min-width: 60px;
  height: 60px;
  line-height: 70px;
  text-align: center;
`;
export const TitleBox = styled.span`
  position: relative;
  display: block;
  padding: 0 10px;
  height: 60px;
  line-height: 60px;
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
export const ToggleMenu = styled.div`
  position: absolute;
  bottom: 15px;
  right: 15px;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.5em;
  cursor: pointer;
  background: #fff;
  border-radius: 50%;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.15);

  &::before {
    content: "";
    position: absolute;
    width: 26px;
    height: 3px;
    border-radius: 2px;
    background: #365fa1;
    transform: ${(props: Props) =>
      props.toggle ? `translateY(0px) rotate(-405deg)` : `translateY(-5px)`};
    transition: 1s;
  }
  &::after {
    content: "";
    position: absolute;
    width: 26px;
    height: 3px;
    border-radius: 2px;
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
