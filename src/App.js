import Pages from "./pages/Pages";
import Category from "./components/Category";
import { BrowserRouter } from "react-router-dom";
import Search from "./components/Search";
import styled from "styled-components";
import { Link } from "react-router-dom"
import { GiKnifeFork } from "react-icons/gi";
import { devices } from "./components/devices";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav>
        <GiKnifeFork /> 
        <Logo to={"/"}>deliciousss</Logo>
      </Nav>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: "Lobster Two", cursive;
`

const Nav = styled.div`
  padding: 4rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  svg {
    font-size: 2rem;
  }
  @media ${devices.mobileL} {
    padding: 4rem 0rem 2rem 0rem;
  }
  @media ${devices.mobileLs} and ${devices.tabletM} {
    padding: 4rem 0rem 2rem 0rem;
  }
  @media ${devices.tabletMs} and ${devices.tabletL} {
    padding: 4rem 0rem 2rem 0rem;
  }
  @media ${devices.tabletLs} and ${devices.laptopM} {
    padding: 4rem 0rem 2rem 0rem;
  }
  @media ${devices.laptopMs} and ${devices.laptop} {
    padding: 4rem 0rem 2rem 0rem;
  }
  @media ${devices.laptops} and ${devices.laptopL} {
    padding: 4rem 0rem 2rem 0rem;
  }
`
































































































































































































































































































