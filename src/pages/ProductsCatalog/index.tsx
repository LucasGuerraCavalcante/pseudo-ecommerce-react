import React, { useEffect, useState } from 'react';

import { MdAttachMoney } from 'react-icons/md';
import { FaSortAlphaDown } from 'react-icons/fa';
import { FaHotjar } from 'react-icons/fa';

import '../../styles/pages/catalog-styles.css';

import Product from '../../components/Product';

import data from '../../data/products.json';

function ProductsCatalog() {

    const [sortType, setSortType] = useState<string>('Nome');

    const [showSortType, setShowSortType] = useState<boolean>(true);
    const [sortTypeHover, setSortTypeHover] = useState<string>('');

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

            </div>
        </div>
    );
}

export default ProductsCatalog;