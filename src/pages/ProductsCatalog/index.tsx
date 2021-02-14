import React, { useState, useEffect } from 'react';

import { MdAttachMoney } from 'react-icons/md';
import { FaSortAlphaDown } from 'react-icons/fa';
import { FaHotjar } from 'react-icons/fa';

import '../../styles/pages/catalog-styles.css';

import ProductCard from '../../components/ProductCard';

import data from '../../data/products.json';

interface Product {
    id: number;
    name: string;
    price: number;
    score: number;
    image: string;

    shoppingCartId?: string;
}

function ProductsCatalog() {

    const [sortType, setSortType] = useState<string>('Nome');
    const [dataArrayBySortType, setDataArrayBySortType] = useState<Array<Product>>(data);

    const [showSortType, setShowSortType] = useState<boolean>(true);
    const [sortTypeHover, setSortTypeHover] = useState<string>('');

    const [showCheckoutArea, setShowCheckoutArea] = useState<boolean>(false);

    const [shoppingCart, setShoppingCart] = useState<Array<Product>>([]);

    const [frete, setFrete] = useState<number>(0);
    const [subtotal, setSubtotal] = useState<number>(0);

    const changeDefintiveSortType = function(sortTypeName: string) {
        setSortType(sortTypeName)
    }

    const changeSortTypeHover = function(sortTypeName: string) {
        setShowSortType(false)
        setSortTypeHover(sortTypeName)
    }

    const changeSortTypeMouseLeave = function() {
        setShowSortType(true)
    }

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
        <div id="products-catalog">
            <aside>
                <header>
                    <h2>Navege pelo nosso catálogo!</h2>
                    <p>Frete grátis para compras acima de 250,00 R$</p>
                </header>

                <div id="checkout-flex-structure">
                    <div id="checkout-top">
                        <h3 className="cart-text">Checkout</h3>
                        <div>
                            <a id="checkout-button" onClick={() => showCheckoutAreaFunction()} >
                                <img src={`${process.env.PUBLIC_URL}/assets/cart-icon.svg`} />
                                <img src={`${process.env.PUBLIC_URL}/assets/arrow-down-icon.svg`} />
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
                                                        : ( <p>{frete.toFixed(2)} R$</p> )
                                                }                                            
                                            </div>
                                            <div className="value-wrapper" id="value-wrapper-subtotal">
                                                <span>Subtotal:</span>
                                                <p>{subtotal.toFixed(2)} R$</p>
                                            </div>
                                        </div>
                                        <div id="value-wrapper-total">
                                            <span>Total: </span>
                                            {
                                                subtotal > 250
                                                    ? ( <p className="cart-text">{subtotal.toFixed(2)} R$</p> ) 
                                                    : ( <p className="cart-text">{(subtotal + frete).toFixed(2)} R$</p> )
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

                <footer>
                    <span>Agradeçemos sua visita</span>
                </footer> 
            </aside>

            <div id="buttons-wrapper">
                <button 
                    className="sort-button"
                    onClick={() => changeDefintiveSortType('Nome')}

                    onMouseOver={() => changeSortTypeHover('Nome')}
                    onMouseLeave={() => changeSortTypeMouseLeave()}
                >
                    <FaSortAlphaDown size={32} color="#FFF" />
                </button>
                <button 
                    className="sort-button"
                    onClick={() => changeDefintiveSortType('Preço')}

                    onMouseOver={() => changeSortTypeHover('Preço')}
                    onMouseLeave={() => changeSortTypeMouseLeave()}
                >
                    <MdAttachMoney size={40} color="#FFF" />
                </button>
                <button 
                    className="sort-button"
                    onClick={() => changeDefintiveSortType('Popularidade')}

                    onMouseOver={() => changeSortTypeHover('Popularidade')}
                    onMouseLeave={() => changeSortTypeMouseLeave()}
                >
                    <FaHotjar size={32} color="#FFF" />
                </button>
            </div>

            <div id="products-container">
            <h3 id="sort-type-title">Ordenar por: {showSortType ? sortType : sortTypeHover } </h3>
            <div id="products-wrapper">
                {

                    sortType === "Preço" 
                        ? 
                        dataArrayBySortType.sort((a, b) => (a.price > b.price) ? 1 : -1).map((product) => {
                            return (
                                <ProductCard 
                                    id={product.id}
                                    name={product.name}
                                    price={product.price}
                                    score={product.score}
                                    image={product.image}
    
                                    shoppingCart={shoppingCart}
                                    setShoppingCart={setShoppingCart}
    
                                    frete={frete}
                                    subtotal={subtotal}
                                    setFrete={setFrete}
                                    setSubtotal={setSubtotal}
                                />
                            );
                        })
                        :
                            sortType === "Popularidade" 

                            ?
                            dataArrayBySortType.sort((a, b) => (a.score < b.score) ? 1 : -1).map((product) => {
                                return (
                                    <ProductCard 
                                        id={product.id}
                                        name={product.name}
                                        price={product.price}
                                        score={product.score}
                                        image={product.image}
        
                                        shoppingCart={shoppingCart}
                                        setShoppingCart={setShoppingCart}
        
                                        frete={frete}
                                        subtotal={subtotal}
                                        setFrete={setFrete}
                                        setSubtotal={setSubtotal}
                                    />
                                );
                            })
                            :
                            dataArrayBySortType.sort(function(a, b) {
                                var textA = a.name.toUpperCase();
                                var textB = b.name.toUpperCase();
                                return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
                            }).map((product) => {
                                return (
                                    <ProductCard 
                                        id={product.id}
                                        name={product.name}
                                        price={product.price}
                                        score={product.score}
                                        image={product.image}
        
                                        shoppingCart={shoppingCart}
                                        setShoppingCart={setShoppingCart}
        
                                        frete={frete}
                                        subtotal={subtotal}
                                        setFrete={setFrete}
                                        setSubtotal={setSubtotal}
                                    />
                                );
                            })
                }
            </div>
        </div>
        </div>
    );
}

export default ProductsCatalog;
