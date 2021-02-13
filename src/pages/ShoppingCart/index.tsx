import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiPlus } from 'react-icons/fi';

import '../../styles/pages/shopping-cart-styles.css';

import mapMarker from '../img/marker.svg';

// interface Products {

// }

function ShoppingCart() {

    // const [Shopping, setShopping] = useState<[]>([]);

    // useEffect(() => {
    //     api.get('Shopping').then(response => {
    //         setShopping(response.data);
    //     });
    // }, []);

    return (
        <div id="shopping-cart">
            <aside>
                <header>
                    <h2></h2>
                    <p></p>
                </header>

                <footer>
                    <strong></strong>
                    <span></span>
                </footer>
            </aside>
        </div>
    );
}

export default ShoppingCart;