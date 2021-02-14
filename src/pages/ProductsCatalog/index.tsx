import React, { useState } from 'react';

import ProductCard from '../../components/ProductCard';
import CheckoutCard from '../../components/CheckoutCard';
import ButtonsWrapper from '../../components/ButtonsWrapper';

import '../../styles/pages/catalog-styles.css';
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

    const dataArrayBySortType:Array<Product> = data;

    const [sortType, setSortType] = useState<string>('Nome');

    const [showSortType, setShowSortType] = useState<boolean>(true);
    const [sortTypeHover, setSortTypeHover] = useState<string>('');

    const [showCheckoutArea, setShowCheckoutArea] = useState<boolean>(false);

    const [shoppingCart, setShoppingCart] = useState<Array<Product>>([]);

    const [frete, setFrete] = useState<number>(0);
    const [subtotal, setSubtotal] = useState<number>(0);

    return (
        <div id="products-catalog">
            <aside>
                <header>
                    <h2>Navege pelo nosso catálogo!</h2>
                    <p>Frete grátis para compras acima de 250,00 R$</p>
                </header>

                <CheckoutCard 
                    frete={frete} 
                    subtotal={subtotal}
                    showCheckoutArea={showCheckoutArea}
                    shoppingCart={shoppingCart} 
            
                    setFrete={setFrete}
                    setSubtotal={setSubtotal}
                    setShoppingCart={setShoppingCart}
                    setShowCheckoutArea={setShowCheckoutArea}
                />

                <footer>
                    <span>Agradeçemos sua visita</span>
                </footer> 
            </aside>

            <ButtonsWrapper 
                setSortType={setSortType}
                setShowSortType={setShowSortType}
                setSortTypeHover={setSortTypeHover}
            />

            <div id="products-container">
            <h3 id="sort-type-title">Ordenar por: {showSortType ? sortType : sortTypeHover } </h3>
            <div id="products-wrapper">
                {
                    // Renderizar produtos organizados por preco
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
                            // Renderizar produtos organizados por popularidade
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
                            // Renderizar produtos organizados por ordem alfabetica
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
