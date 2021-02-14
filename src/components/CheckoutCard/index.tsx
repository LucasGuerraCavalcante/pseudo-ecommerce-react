import React, { useState } from 'react';

import '../../styles/pages/catalog-styles.css';

interface Product {
    id: number;
    name: string;
    price: number;
    score: number;
    image: string;

    shoppingCartId?: string;
}

interface CheckoutCardProps {
    frete: number;
    subtotal: number;
    showCheckoutArea: boolean;
    shoppingCart: Array<Product>;

    setFrete: Function;
    setSubtotal: Function;  
    setShoppingCart: Function;
    setShowCheckoutArea: Function;
}

function CheckoutCard({
        frete, 
        subtotal,
        showCheckoutArea,
        shoppingCart, 

        setFrete,
        setSubtotal,
        setShoppingCart,
        setShowCheckoutArea,
    }:CheckoutCardProps) {

    const showCheckoutAreaFunction = function() {
        setShowCheckoutArea(!showCheckoutArea)
    }

    const deleteShoppingCartProductByID = function(productToBeDeleted: Product) {
        if (productToBeDeleted.shoppingCartId) {
            setShoppingCart(shoppingCart.filter((product) => {return product.shoppingCartId !== productToBeDeleted.shoppingCartId } ))
            setSubtotal(subtotal - productToBeDeleted.price)
            setFrete(frete - 10)
        }
    }

    return (
        <>
            <div id="checkout-flex-structure">
                <div id="checkout-top" className={showCheckoutArea ? 'border-radius-top-corners' : 'border-radius-all-corners' }>
                    <h3 className="cart-text">Checkout</h3>
                    <div>
                        <a id="checkout-button" onClick={() => showCheckoutAreaFunction()} >
                            <div>
                                <span id="cart-notification" className={shoppingCart.length === 0 ? 'cart-notification-0' : 'cart-notification-maiorque-0' }>
                                    {shoppingCart.length}
                                </span>
                                <img
                                    alt="Icone de Carrinho de Compras"
                                    src={`${process.env.PUBLIC_URL}/assets/cart-icon.svg`} 
                                />
                            </div>
                            {
                                showCheckoutArea
                                ? (
                                    <span 
                                        id="x-icon"   
                                    >
                                        X
                                    </span>

                                )
                                : (
                                    <img
                                        alt="Icone de Sera para Baixo"
                                        src={`${process.env.PUBLIC_URL}/assets/arrow-down-icon.svg`} 
                                    />
                                )
                            }

                        </a>
                    </div>
                </div>
                    {
                        showCheckoutArea       
                        ? (
                            <>
                            <div id="checkout-container">
                                <div id="cart-wrapper">
                                    <p className="cart-text">Carrinho: </p>
                                    <ul>
                                        {
                                            shoppingCart.length === 0 
                                            ?
                                                ( 
                                                    <p id="carrinho-vazio-text" >
                                                        Adicione produtos ao carrinho
                                                    </p>
                                                ) 
                                            :
                                            shoppingCart.map((product) => {
                                                return (
                                                    <li key={product.shoppingCartId} >
                                                        <div 
                                                            id="product-li"
                                                            onClick={() => deleteShoppingCartProductByID(product)}
                                                        >
                                                            <span>
                                                                {product.name}
                                                            </span>
                                                            <span>
                                                                {product.price} R$
                                                            </span>
                                                        </div>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                                <div id="data-wrapper">
                                    <div className="cart-text">
                                        <div className="value-wrapper">
                                            <span>Frete: </span>
                                            {
                                                subtotal > 250
                                                    ? ( <p>Grátis!!!</p> ) 
                                                    : ( <p>{Math.abs(frete).toFixed(2)} R$</p> )
                                            }                                            
                                        </div>
                                        <div className="value-wrapper" id="value-wrapper-subtotal">
                                            <span>Subtotal:</span>
                                            <p>{Math.abs(subtotal).toFixed(2)} R$</p>
                                        </div>
                                    </div>
                                    <div id="value-wrapper-total">
                                        <span>Total: </span>
                                        {
                                            subtotal > 250
                                                ? ( <p className="cart-text">{Math.abs(subtotal).toFixed(2)} R$</p> ) 
                                                : ( <p className="cart-text">{Math.abs(subtotal + frete).toFixed(2)} R$</p> )
                                        }
                                    </div>
                                    <a>Comprar</a>
                                </div>
                            </div>
                            </>
                        )
                        : (
                            <>
                            </>
                        )
                    }
            </div>
        </>
    );
}

export default CheckoutCard;
