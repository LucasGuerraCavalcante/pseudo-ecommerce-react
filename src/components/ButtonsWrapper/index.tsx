import React from 'react';

import { MdAttachMoney } from 'react-icons/md';
import { FaSortAlphaDown } from 'react-icons/fa';
import { FaHotjar } from 'react-icons/fa';

import '../../styles/pages/catalog-styles.css';

interface ButtonsWrapperProps {
    setSortType: Function;
    setShowSortType: Function;
    setSortTypeHover: Function;
}

function ButtonsWrapper({
        setSortType,
        setShowSortType,
        setSortTypeHover
    }:ButtonsWrapperProps) {

    // Troca o estado de sorting definitivamente
    const changeDefintiveSortType = function(sortTypeName: string) {
        setSortType(sortTypeName)
    }

    // Troca apenas o texto que sera renderizado na tela, nao interfere o estado definitivo
    const changeSortTypeHover = function(sortTypeName: string) {
        setShowSortType(false)
        setSortTypeHover(sortTypeName)
    }

    const changeSortTypeMouseLeave = function() {
        setShowSortType(true)
    }

    return (
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
    );
}

export default ButtonsWrapper;
