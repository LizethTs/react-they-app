import React from 'react';
import './Item.css';

const Item =({id, image, nombre, marca, color, precio, stock}) =>{

    return (
        <div className='itemContainer'>
             <div className="imageContainer">
                <img src={image} alt={nombre} className="imageStyle"/>
            </div>
            <p className='nombreItem'>{nombre}</p>
            <p className='datoItem'>Marca: {marca}</p>
            <p className='datoItem'>Color: {color}</p>
            <p className='datoItem'>Precio: $ {precio}</p>
            <p className='datoItem'>Stock: {stock}</p>
            <button className='btnItem'>Ver más</button>
        </div>
    )
}

export default Item;
