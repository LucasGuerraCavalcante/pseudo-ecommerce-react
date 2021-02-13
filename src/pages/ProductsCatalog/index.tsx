import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BiCart } from 'react-icons/bi';

import '../../styles/pages/catalog-styles.css';

// interface Product {
//     id: number;
// }

function ProductsCatalog() {

    // const [products, setproducts] = useState<Product>[]>([]);

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

          

            <Link to="/create" className="shopping-cart">
                <BiCart size={32} color="#FFF" />
            </Link>
        </div>
    );
}

export default ProductsCatalog;