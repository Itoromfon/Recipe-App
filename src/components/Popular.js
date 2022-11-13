import { useEffect, useState } from "react"
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide"
import '@splidejs/splide/dist/css/splide.min.css';
import { Link } from "react-router-dom";
import { devices } from "./devices";

export default function Popular() {

    const [popular, setPopular] = useState([]);

    useEffect(() => {
        getPopular()
    }, [])

    const getPopular = async () => {

        const check = localStorage.getItem("popular")

        if (check) {
            setPopular(JSON.parse(check))
        } else {
            const api = await fetch(
                `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
            )
            const data = await api.json()
            localStorage.setItem("popular", JSON.stringify(data.recipes))
            setPopular(data.recipes)
            console.log(data.recipes)
        }
    }

    return (
        <div>
            <Wrapper>
                <h3>Popular Picks</h3>
                <Splide options={{
                    perPage: 4,
                    arrows: false,
                    pagination: false,
                    drag: "free",
                    gap: "2rem",
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
                    {popular.map(recipe => {
                        return (
                            <SplideSlide key={recipe.id}>
                                <Card>
                                    <Link to={"/recipe/" + recipe.id}>
                                        <p>{recipe.title}</p>
                                        <img className="image" src={recipe.image} alt={recipe.title} />
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
        h3 {
            font-size: 20px;
            margin-bottom: 1rem;
        }
    }
    @media ${devices.mobileLs} and ${devices.tabletM} {
        h3 {
            font-size: 21px;
            margin-bottom: 1rem;
        }
    }
    @media ${devices.tabletMs} and ${devices.tabletL} {
        h3 {
            font-size: 22px;
            margin-bottom: 1rem;
        }
    }
    @media ${devices.tabletLs} and ${devices.laptopM} {
        h3 {
            font-size: 23px;
            margin-bottom: 1rem;
        }
    }
    @media ${devices.laptopMs} and ${devices.laptop} {
        h3 {
            font-size: 23px;
            margin-bottom: 1rem;
        }
    }
    @media ${devices.laptops} and ${devices.laptopL} {
        h3 {
            font-size: 24px;
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



























































































































































































































// const sizes = {
//     mobileS: '320px',
//     mobileM: '375px',
//     mobileL: '480px',
//     tabletM: '600px',
//     tablet: '768px',
//     laptop: '1024px',
//     laptopL: '1440px',
//     desktop: '2560px',
// }

// export const devices = {
//     mobileS: `(min-width: ${sizes.mobileS})`,
//     mobileM: `(min-width: ${sizes.mobileM})`,
//     mobileL: `(min-width: ${sizes.mobileL})`,
//     tabletM: `(min-width: ${sizes.tabletM})`,
//     tablet: `(min-width: ${sizes.tablet})`,
//     laptop: `(min-width: ${sizes.laptop})`,
//     laptopL: `(min-width: ${sizes.laptopL})`,
//     desktop: `(min-width: ${sizes.desktop})`,
// };

// @media ${devices.mobileL} {
    //     gap: 1rem;
    //     img{
    //         max-width: 150%;
    //         height: 50%;
    //     }