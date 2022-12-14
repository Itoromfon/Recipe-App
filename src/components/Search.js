import { useState } from "react"
import styled from "styled-components"
import {FaSearch} from "react-icons/fa"
import { useNavigate } from "react-router-dom"
import { devices } from "./devices"

function Search() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  
  const handleSubmit = (e) => { 
    console.log("Successfully Submitted!!!")
    e.preventDefault();
    navigate("/searched/" + input )
  }

  return (
    <FormStyle onSubmit={handleSubmit}>
      <div>
        <FaSearch></FaSearch>
        <input
            onChange={(e) => setInput(e.target.value) }
            type="text"
            value={input}
        />
      </div>
    </FormStyle>
  )
}

const FormStyle = styled.form`
    margin: 0rem 20rem;

    div {
        position: relative;
        width: 100%;
    }
    
    input {
        border: none;
        background: linear-gradient(35deg, #494949, #313131);
        font-size: 1.5rem;
        color: #FFFFFF;
        padding: 1rem 3rem;
        border: none;
        border-radius: 1rem;
        outline: none;
        width: 100%;
    }
    @media ${devices.mobileL} {
      margin: 0rem 1rem;
      input {
        height: 2.5rem;
        font-size: 1rem;
        border-radius: 10px;
        margin-top: 0rem;
      }
    }
    @media ${devices.mobileLs} and ${devices.tabletM} {
      margin: 0rem 1rem;
      input {
        height: 2.8125rem;
        font-size: 1rem;
        border-radius: 10px;
        margin-top: 0rem;
      }
    }
    @media ${devices.tabletMs} and ${devices.tabletL} {
      margin: 0rem 3rem;
      input {
        height: 2.9375rem;
        font-size: 1rem;
        border-radius: 10px;
        margin-top: 0rem;
      }
    }
    @media ${devices.tabletLs} and ${devices.laptopM} {
      margin: 0rem 4rem;
      input {
        height: 3rem;
        font-size: 1rem;
        border-radius: 10px;
        margin-top: 0rem;
      }
    }
    @media ${devices.laptopMs} and ${devices.laptop} {
      margin: 0rem 5rem;
      input {
        height: 3.0625rem;
        font-size: 1rem;
        border-radius: 10px;
        margin-top: 0rem;
      }
    }
    @media ${devices.laptops} and ${devices.laptopL} {
      margin: 0rem 10rem;
      input {
        height: 3.125rem;
        font-size: 1rem;
        border-radius: 10px;
        margin-top: 0rem;
      }
    }
    svg {
        position: absolute;
        top: 50%;
        left: 0%;
        transform: translate(100%, -50%);
        color: #FFFFFF;
        cursor: pointer;
    }
`

export default Search