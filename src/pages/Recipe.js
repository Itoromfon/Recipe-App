import { useState, useEffect, useCallback } from "react"
import styled from "styled-components"
import { useParams } from "react-router-dom"
import { devices } from "../components/devices";

function Recipe() {
  let params = useParams();
  const [details, setDetails] = useState("")
  const [activeTab, setActiveTab] = useState("instructions")

  const getDetails = useCallback(() => {
    const fetchDetails = async () => {
    const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`)
    const detailData = await data.json()
    setDetails(detailData)
    }
    return fetchDetails()
  }, [params.name])
  

  useEffect(() => {
    getDetails(params.name)
  }, [params.name, getDetails])

  return (
    <DetailWrapper>
      <div>
        <h2>{details.title}</h2>
        <img src={details.image} alt="" />
      </div>
      <Info>
        <ButtonDiv>
          <Button className={activeTab === "instructions" ? "active" : ""} onClick={() => setActiveTab("instructions")}>Instructions</Button>
          <Button className={activeTab === "ingredients" ? "active" : ""} onClick={() => setActiveTab("ingredients")}>Ingredients</Button>
        </ButtonDiv>
        {activeTab === "instructions" && (
          <div>
            <h3 dangerouslySetInnerHTML={{__html: details.summary}}></h3>
            <h3 dangerouslySetInnerHTML={{__html: details.instructions}}></h3>
          </div>
        )}
        {activeTab === "ingredients"  && (
          <ul>
            {details.extendedIngredients.map((ingredient) => {
              return (
                <li key={ingredient.id}>{ingredient.original}</li>
              )
            })}
          </ul>
        )}
      </Info>
    </DetailWrapper>
  )
}

const DetailWrapper = styled.div`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;
  .active{
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }
  h2{
    margin-bottom: 2rem
  }
  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }
  ul {
    margin-top: 2rem;
  }
  @media ${devices.mobileL} {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    img {
      width: 100%;
      border-radius: 2rem;
    }
    h2 {
      font-size: 1.3125rem;
    }
    h3 {
      font-size: 1rem;
      line-height: 1.5rem;
    }
    li {
      font-size: 1rem;
      line-height: 2rem;
    }
  }
  @media ${devices.mobileLs} and ${devices.tabletM} {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    img {
      width: 100%;
      border-radius: 2rem;
    }
    h2 {
      font-size: 1.375rem;
    }
    h3 {
      font-size: 1rem;
      line-height: 1.5rem;
    }
    li {
      font-size: 1rem;
      line-height: 2rem;
    }
  }
  @media ${devices.tabletMs} and ${devices.tabletL} {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    img {
      width: 100%;
      border-radius: 2rem;
    }
    h2 {
      font-size: 1.375rem;
    }
    h3 {
      font-size: 1.2rem;
      line-height: 2rem;
    }
    li {
      font-size: 1.2rem;
      line-height: 2rem;
    }
  }
  @media ${devices.tabletLs} and ${devices.laptopM} {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    img {
      width: 100%;
      border-radius: 2rem;
    }
    h2 {
      font-size: 1.4375rem;
    }
    h3 {
      font-size: 1.4rem;
      line-height: 2.2rem;
    }
    li {
      font-size: 1.4rem;
      line-height: 2.2rem;
    }
  }
  @media ${devices.laptopMs} and ${devices.laptop} {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    img {
      width: 100%;
      border-radius: 2rem;
    }
    h2 {
      font-size: 1.4375rem;
    }
    h3 {
      font-size: 1.4rem;
      line-height: 2.2rem;
    }
    li {
      font-size: 1.4rem;
      line-height: 2.2rem;
    }
  }
  @media ${devices.laptops} and ${devices.laptopL} {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    img {
      width: 100%;
      border-radius: 2rem;
    }
    h2 {
      font-size: 1.5rem;
    }
    h3 {
      font-size: 1.5rem;
      line-height: 2.3rem;
    }
    li {
      font-size: 1.5rem;
      line-height: 2.3rem;
    }
  }
`

const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  border-radius: 1rem;
  margin-right: 2rem;
  font-weight: 600;
  cursor: pointer;
  @media ${devices.mobileL} {
    margin-right: 1rem;
    padding: 1rem 1.63rem;
  }
  @media ${devices.mobileLs} and ${devices.tabletM} {
    margin-right: 1rem;
    padding: 1rem 1.7rem;
  }
  @media ${devices.tabletMs} and ${devices.tabletL} {
    margin-right: 1rem;
    padding: 1rem 1.72rem;
  }
  @media ${devices.tabletLs} and ${devices.laptopM} {
    margin-right: 1rem;
    padding: 1rem 1.8rem;
  }
  @media ${devices.laptopMs} and ${devices.laptop} {
    margin-right: 1rem;
    padding: 1rem 1.9rem;
  }
  @media ${devices.laptops} and ${devices.laptopL} {
    margin-right: 1rem;
    padding: 1rem 2rem;
  }
`

const ButtonDiv = styled.div`
  display: flex;
  @media ${devices.mobileL} {
    margin-top: 2rem;
  }
  @media ${devices.mobileLs} and ${devices.tabletM} {
    margin-top: 2rem;
  }
  @media ${devices.tabletMs} and ${devices.tabletL} {
    margin-top: 2rem;
  }
  @media ${devices.tabletLs} and ${devices.laptopM} {
    margin-top: 2rem;
  }
  @media ${devices.laptopMs} and ${devices.laptop} {
    margin-top: 2rem;
  }
  @media ${devices.laptops} and ${devices.laptopL} {
    margin-top: 2rem;
  }
`

const Info = styled.div`
  margin-left: 10rem;
  @media ${devices.mobileL} {
    margin-left: 0rem;
  }
  @media ${devices.mobileLs} and ${devices.tabletM} {
    margin-left: 0rem;
  }
  @media ${devices.tabletMs} and ${devices.tabletL} {
    margin-left: 0rem;
  }
  @media ${devices.tabletLs} and ${devices.laptopM} {
    margin-left: 0rem;
  }
  @media ${devices.laptopMs} and ${devices.laptop} {
    margin-left: 0rem;
  }
  @media ${devices.laptops} and ${devices.laptopL} {
    margin-left: 0rem;
  }
`

export default Recipe