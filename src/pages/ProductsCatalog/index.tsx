import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BiCart } from 'react-icons/bi';

import '../../styles/pages/catalog-styles.css';

import Product from '../../components/Product';

import data from '../../data/products.json';

function ProductsCatalog() {

    return (
        <div id="products-catalog">
            <aside>
                <header>
                    <h2>Navege pelo nosso catálogo!</h2>
                    <p>E adicione os produtos ao seu carrinho</p>
                </header>

                <footer>
                    <strong>Seja Bem Vindo(a)</strong>
                    <span>Confira nossos produtos</span>
                </footer> 
            </aside>

            <div id="products-wrapper">
                {
                    data.map((product) => {
                        return (
                            <Product 
                                id={product.id}
                                name={product.name}
                                price={product.price}
                                score={product.score}
                                image={product.image}
                            />
                        );
                    })
                }
            </div>
          
            <Link to="/shop" className="shopping-cart">
                <BiCart size={32} color="#FFF" />
            </Link>
        </div>
    );
}

export default ProductsCatalog;