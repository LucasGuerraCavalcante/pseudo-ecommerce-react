import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

import '../../styles/pages/landing-styles.css';

function LandingPage() {
    return (
        <div id="page-landing">
            <div className="content-wrapper">
                <main>
                    <h1>E-Commerce de Games</h1>
                    <p>Os melhores preços estão aqui!</p>
                </main>
        
                <div className="bem-vindo">
                    <strong>Seja Bem Vindo(a)</strong>
                    <span>Confira nossos produtos</span>
                </div>
            
                <Link to="/catalog" className="enter-app">
                    <FiArrowRight
                        size={26}
                        color="rgba(0, 0, 0, 0.6)"
                    />
                </Link>
            </div>
        </div>
    );
}

export default LandingPage;
