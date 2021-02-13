import React, { useEffect, useState } from 'react';
import { BiCart } from 'react-icons/bi';

import '../../styles/components/product.css';

// import imageTest from '../../assets/mortal-kombat-xl.png';

// interface Product {
//     id: number;
//     name: string;
//     price: number;
//     score: number;
//     image: string;
// }

interface Product {
    id: number;
    name: string;
    price: number;
    score: number;
    image: string;
}

interface ProductCardProps {
    id: number;
    name: string;
    price: number;
    score: number;
    image: string;

    shoppingCart: Array<Product>;

    frete: number;
    subtotal: number;

    setShoppingCart: Function;
    setFrete: Function;
    setSubtotal: Function;
}

function ProductCard(
    {id, name, price, score, image, 
        shoppingCart, 
        setShoppingCart,
        frete,
        subtotal,
        setFrete,
        setSubtotal
    }:ProductCardProps) {

    const addProductToTheShoppingCart = function(newProduct:Product) {
        setShoppingCart([...shoppingCart, newProduct]);

        setSubtotal(subtotal + newProduct.price);
        setFrete(frete + 10);  
    }

    return (
        <div key={id} className="product">
            <img src={`${process.env.PUBLIC_URL}/assets/${image}`} />
            <strong id="product-name">{name}</strong>
            <p id="product-prize">{price} R$</p>
            <div id="cart-opts">
                <a id="cart-button" 
                    onClick={() => addProductToTheShoppingCart({
                        id: id,
                        name: name,
                        price: price,
                        score: score,
                        image: image, 
                    })} 
                >
                    <span id="add-span">
                        <img src={`${process.env.PUBLIC_URL}/assets/cart-icon.svg`}></img>
                    </span>
                    Adicionar ao carrinho
                </a>
            </div>
        </div>
    );
}

export default ProductCard;