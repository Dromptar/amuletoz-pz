import React from 'react';
import './home-cards.css';
import ItemListContainer from '../../ItemListContainer/ItemListContainer';

const HomeCards = () => {
    return (
        <section id='home-cards'>
            <h3 className='title has-text-centered is-size-2'>Productos</h3>
            
                <ItemListContainer/>  
         
                
        </section>
      
        
    );
}

export default HomeCards;
