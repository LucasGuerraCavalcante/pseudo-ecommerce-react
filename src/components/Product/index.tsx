import React, { useEffect, useState } from 'react';
import { BiCart } from 'react-icons/bi';

import '../../styles/components/product.css';

// import imageTest from '../../assets/mortal-kombat-xl.png';

interface Product {
    id: number;
    name: string;
    price: number;
    score: number;
    image: string;
}

function Product({id, name, price, score, image}:Product) {

    return (
        <div key={id} className="product">
            <img src={`${process.env.PUBLIC_URL}/assets/${image}`} />
            <strong id="product-name">{name}</strong>
            <p id="product-prize">{price} R$</p>
            <div id="cart-opts">
                <a id="cart-button">
                    <span id="add-span">
                        <img src={`${process.env.PUBLIC_URL}/assets/cart-icon.svg`}></img>
                    </span>
                    Adicionar ao carrinho
                </a>
            </div>
        </div>
    );
}

export default Product;