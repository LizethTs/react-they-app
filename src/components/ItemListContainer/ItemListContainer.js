import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './ItemListContainer.css';

const ItemListContainer = ({greeting}) =>{
    function onAdd (count) {
        console.log(`se agregado ${count} productos`)
    }

    return (
        <div className='itemListContainer'>
           <h3 className='titleItemListContainer'>{greeting}</h3>
            <ItemCount
                stock={5}
                initial={1}
                onAdd={onAdd}
            />
        </div>
    )
}

export default ItemListContainer;
