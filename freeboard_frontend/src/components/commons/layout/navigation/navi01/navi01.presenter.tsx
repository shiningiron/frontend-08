import { useState } from "react";
import * as Nav from "./navi01.styles";

export default function Navi01UI() {
  const [toggle, setToggle] = useState(false);
  const isToggle = () => {
    setToggle((prev) => !prev);
  };
  return (
    <>
      <Nav.Wrapper toggle={toggle}>
        <Nav.ListWrapper>
          <Nav.List>
            <Nav.Link>
              <Nav.IconBox className="icon">
                <Nav.LogoIcon />
              </Nav.IconBox>
              <Nav.TitleBox className="title">
                <h2>VC</h2>
              </Nav.TitleBox>
            </Nav.Link>
          </Nav.List>
          <Nav.List>
            <Nav.Link href="http://localhost:3000/">
              <Nav.IconBox className="icon">
                <Nav.HomeEarthIcon />
              </Nav.IconBox>
              <Nav.TitleBox className="title">Home</Nav.TitleBox>
            </Nav.Link>
          </Nav.List>
          <Nav.List>
            <Nav.Link href="http://localhost:3000/">
              <Nav.IconBox className="icon">
                <Nav.PersonIcon />
              </Nav.IconBox>
              <Nav.TitleBox className="title">Mypage</Nav.TitleBox>
            </Nav.Link>
          </Nav.List>
          <Nav.List>
            <Nav.Link href="http://localhost:3000/freeboard">
              <Nav.IconBox className="icon">
                <Nav.BoardsIcon />
              </Nav.IconBox>
              <Nav.TitleBox className="title">Boards</Nav.TitleBox>
            </Nav.Link>
          </Nav.List>
          <Nav.List>
            <Nav.Link href="http://localhost:3000/usedItem/list">
              <Nav.IconBox className="icon">
                <Nav.UsedMarket />
              </Nav.IconBox>
              <Nav.TitleBox className="title">UsedMarket</Nav.TitleBox>
            </Nav.Link>
          </Nav.List>
          <Nav.List>
            <Nav.Link href="http://localhost:3000/usedItem/payment/loading">
              <Nav.IconBox className="icon">
                <Nav.Payment />
              </Nav.IconBox>
              <Nav.TitleBox className="title">Payment</Nav.TitleBox>
            </Nav.Link>
          </Nav.List>
        </Nav.ListWrapper>
        <Nav.ToggleMenu
          className="toggle"
          onClick={isToggle}
          toggle={toggle}
        ></Nav.ToggleMenu>
      </Nav.Wrapper>
    </>
  );
}
