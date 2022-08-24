import React from 'react';
import './ItemListContainer.css';

const ItemListContainer = ({greeting}) =>{
    return (
        <div className='itemListContainer'>
           <h3 className='titleItemListContainer'>{greeting}</h3>
        </div>
    )
}

export default ItemListContainer;
