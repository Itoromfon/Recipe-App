import { useEffect, useState } from "react"
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide"
import '@splidejs/splide/dist/css/splide.min.css';
import { Link } from "react-router-dom";
import { devices } from "./devices";

export default function Veggie() {

    const [veggie, setVeggie] = useState([]);

    useEffect(() => {
        getVeggie()
    }, [])

    const getVeggie = async () => {

        const check = localStorage.getItem("veggie")

        if (check) {
            setVeggie(JSON.parse(check))
        } else {
            const api = await fetch(
                `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`
            )
            const data = await api.json()
            localStorage.setItem("veggie", JSON.stringify(data.recipes))
            setVeggie(data.recipes)
            console.log(data.recipes)
        }
    }
    
  return (
    <div>
        <Wrapper>
            <h3>Our Vegetarian Picks</h3>
            <Splide options={{
                perPage: 3,
                arrows: false,
                pagination: false,
                drag: "free",
                gap: "3rem",
                breakpoints: {
                    480: {
                        arrows: true,
                        perPage: 2,
                        gap: "1rem",
                    },

                    600: {
                        arrows: true,
                        perPage: 2,
                        gap: "1rem",
                    },

                    768: {
                        arrows: true,
                        perPage: 3,
                        gap: "1rem",
                    },

                    900: {
                        arrows: true,
                        perPage: 3,
                        gap: "1rem",
                    },

                    1024: {
                        arrows: true,
                        perPage: 3,
                        gap: "1rem",
                    },

                    1440: {
                        arrows: true,
                        perPage: 4,
                        gap: "1rem",
                    }
                }
            }}>
                {veggie.map(recipe => {
                    return (
                        <SplideSlide key={recipe.id}>
                            <Card>
                                <Link to={"/recipe/" + recipe.id}>
                                    <p>{recipe.title}</p>
                                    <img src={recipe.image} alt={recipe.title} />
                                    <Gradient />
                                </Link>
                            </Card>
                        </SplideSlide>
                    )
                })}
            </Splide>
        </Wrapper>
    </div>
  )
}

const Wrapper = styled.div`
    margin: 4rem 0rem;
    @media ${devices.mobileL} {
        margin: 2rem 0rem;
        h3 {
            font-size: 1.25rem;
            margin-bottom: 1rem;
        }
    }
    @media ${devices.mobileLs} and ${devices.tabletM} {
        margin: 2rem 0rem;
        h3 {
            font-size: 1.3125rem;
            margin-bottom: 1rem;
        }
    }
    @media ${devices.tabletMs} and ${devices.tabletL} {
        margin: 3rem 0rem;
        h3 {
            font-size: 1.375rem;
            margin-bottom: 1rem;
        }
    }
    @media ${devices.tabletLs} and ${devices.laptopM} {
        margin: 3rem 0rem;
        h3 {
            font-size: 1.4375rem;
            margin-bottom: 1rem;
        }
    }
    @media ${devices.laptopMs} and ${devices.laptop} {
        h3 {
            font-size: 1.4375rem;
            margin-bottom: 1rem;
        }
    }
    @media ${devices.laptops} and ${devices.laptopL} {
        h3 {
            font-size: 1.5rem;
            margin-bottom: 1rem;
        }
    }
`

const Card = styled.div`
    min-height: 25rem;
    border-radius: 2rem;
    overflow: hidden;
    position: relative;

    @media ${devices.mobileL} {
        min-height: 15rem;
    }
    @media ${devices.mobileLs} and ${devices.tabletM} {
        min-height: 16rem;
    }
    @media ${devices.tabletMs} and ${devices.tabletL} {
        min-height: 17rem;
    }
    @media ${devices.tabletLs} and ${devices.laptopM} {
        min-height: 18rem;
    }
    @media ${devices.laptopMs} and ${devices.laptop} {
        min-height: 19rem;
    }
    @media ${devices.laptops} and ${devices.laptopL} {
        min-height: 20rem;
    }

    img{
        border-radius: 2rem;
        position: absolute;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    }
    
    p{
        position: absolute;
        z-index: 10;
        left: 50%;
        bottom: 0%;
        transform: translate(-50%, -50%);
        color: #FFFFFF;
        width: 100%;
        text-align: center;
        font-weight: 600;
        font-size: 1rem;
        height: 40%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

const Gradient = styled.div`
    z-index: 3;
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5))
`

































































































































































































































































