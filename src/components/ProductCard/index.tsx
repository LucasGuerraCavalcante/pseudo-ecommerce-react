import React from 'react';

import '../../styles/components/product.css';

interface Product {
    id: number;
    name: string;
    price: number;
    score: number;
    image: string;

    shoppingCartId?: string;
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
    {   id, name, price, score, image, 
        shoppingCart, 
        setShoppingCart,
        frete,
        subtotal,
        setFrete,
        setSubtotal
    }:ProductCardProps) {

    const addProductToTheShoppingCart = function(newProduct:Product) {

        const randomShoppingCartId = `${Math.floor((Math.random() * 100) + 1)}${Math.floor((Math.random() * 1000) + 1)}${Math.floor((Math.random() * 10000) + 1)}`;

        newProduct = {
            ...newProduct, 
            shoppingCartId: randomShoppingCartId
        }

        setShoppingCart([...shoppingCart, newProduct]);

        setSubtotal(subtotal + newProduct.price);
        setFrete(frete + 10);  
    }

    return (
        <div key={id} className="product">
            <img 
                alt="Imagem do produto" 
                src={`${process.env.PUBLIC_URL}/assets/${image}`}  
            />
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
                        <img 
                            alt="Icone Adicionar ao Carrinho" 
                            src={`${process.env.PUBLIC_URL}/assets/cart-icon.svg`}
                        />
                    </span>
                    Adicionar ao carrinho
                </a>
            </div>
        </div>
    );
}

export default ProductCard;
