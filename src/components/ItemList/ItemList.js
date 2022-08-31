import React from 'react';
import Item from '../Item/Item';
import './ItemList.css';

const ItemList =({items}) =>{

    return (
        <div className='itemListContainer'>
            {items.map((element,index) => (
                <Item {...element} key={index} />
            ))}
        </div>
    )
}

export default ItemList;
