import styled from "styled-components";
import { useState } from "react";
import Button from "./Button";
import Link from "next/link";
import CartIcon from "./icons/CartIcon";
import { useContext } from "react";
import { CartContext } from "./CartContext";

const Box = styled.div`
  background-color: #f8f8f8;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  color: inherit;

    a {
    text-decoration: none;
    color: inherit;
  }


  h3 {
    font-size: 1.2rem;
    margin-bottom: 10px;
    
  }
  p {
    font-size: 1rem;
  }
  img {
    max-width: 100%;
    border-radius: 5px;
    margin-top: 10px;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  .carousel {
    position: relative;
    width: 100%;     
    height: 250px;     
    overflow: hidden;  
    border-radius: 5px;
    margin-top: 10px;
  }

  .carousel img {
    width: 100%;
    height: 100%;
    object-fit: cover; 
    display: block;
    border-radius: 5px;
  }

  .arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    border: none;
    background: none; 
    cursor: pointer;
    font-size: 24px;  
    color: #333;        
    padding: 0;    
    z-index: 2;
  }

  .arrow.left {
    left: 10px;
  }

  .arrow.right {
    right: 10px;
  }

  .arrow svg {
    width: 28px;       
    height: 28px;
  }
`;

export default function ProductBox({ _id, title, description, price, images = [] }) {
    const { addProduct } = useContext(CartContext);
    const uri = `/product/${_id}`;
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevImage = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const nextImage = () => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    return (
        <Box>
            <div className="carousel">
                {images.length > 0 && (
                    <Link href={uri}>
                        <img src={images[currentIndex]} alt={`${title} image`} />
                    </Link>
                )}
                {images.length > 1 && (
                    <>
                        <button className="arrow left" onClick={prevImage}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
                            </svg>

                        </button>
                        <button className="arrow right" onClick={nextImage}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                            </svg>

                        </button>
                    </>
                )}
            </div>

            <Link href={uri}>
                <h3>{title}</h3>
            </Link>

            <Link href={uri}>
                <p>{description}</p>
            </Link>

            <Link href={uri}>
                <p>${price}</p>
            </Link>

            <Button onClick={() => addProduct(_id)} primary outline>
                <CartIcon />
                Add to cart
            </Button>
        </Box>
    );
}
