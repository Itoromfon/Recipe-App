import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi"
import styled from "styled-components";
import { NavLink } from "react-router-dom"
import { devices } from "./devices";

export default function Category() {
  return (
    <List>
        <SLink to={'/cuisine/Italian'}>
            <FaPizzaSlice />
            <h4>Italian</h4>
        </SLink>
        <SLink to={'/cuisine/American'}>
            <FaHamburger />
            <h4>American</h4>
        </SLink>
        <SLink to={'/cuisine/Thai'}>
            <GiNoodles />
            <h4>Thai</h4>
        </SLink>
        <SLink to={'/cuisine/Japanese'}>
            <GiChopsticks />
            <h4>Japnanese</h4>
        </SLink>
    </List>
  )
}

const List = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem 0rem;
`
const SLink = styled(NavLink)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items; center;
    border-radius: 50%;
    // padding: 1rem 1rem;
    text-align: center;
    margin: 2rem;
    cursor: pointer;
    text-decoration: none;
    background: linear-gradient(35deg, #494949, #313131);
    width: 6rem;
    height: 6rem;
    transform: scale(0.8);

    h4 {
        color: #FFFFFF;
        font-size: 0.8rem;
    }
    svg{
        color: #FFFFFF;
        margin: 0 auto;
        font-size: 1.5rem;
    }
    &.active {
        background: linear-gradient(to right, #f27121, #e94057);
        svg {
            color: #FFFFFF;
        }
        h4 {
            color: #FFFFFF;
        }
    }
    @media ${devices.mobileL} {
        padding: 1rem 1rem;
        margin: 1rem;
        width: 5rem;
        height: 5rem;
        h4 {
            font-size: 0.65rem;
        }
        svg{
            font-size: 1.375rem;
        }
    }
    @media ${devices.mobileLs} and ${devices.tabletM} {
        padding: 1rem 1rem;
        margin: 1rem;
        width: 5.2rem;
        height: 5.2rem;
        h4 {
            font-size: 0.7rem;
        }
        svg{
            font-size: 1.4375rem;
        }
    }
    @media ${devices.tabletMs} and ${devices.tabletL} {
        padding: 1rem 1rem;
        margin: 1rem;
        width: 5.3rem;
        height: 5.2rem;
        h4 {
            font-size: 0.73rem;
        }
        svg{
            font-size: 1.4375rem;
        }
    }
    @media ${devices.tabletLs} and ${devices.laptopM} {
        padding: 1rem 1rem;
        margin: 1rem;
        width: 5.4rem;
        height: 5.3rem;
        h4 {
            font-size: 0.74rem;
        }
        svg{
            font-size: 1.4375rem;
        }
    }
`

