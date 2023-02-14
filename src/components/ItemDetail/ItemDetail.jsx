import { useContext } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import { CartContext } from '../../context/CartContext';


const ItemDetail = ({producto}) => {

    const {addItem} = useContext(CartContext);

    const onAdd = (contador) => {
        addItem(producto, contador)
    }
    return (
        // <div className='row g-0'>
        //     <div className='col-md-4'>
        //         <img src={producto.img} className='img-fluid round-start' alt=''></img>
        //     </div>
        //     <div className='col-md-8'>
        //         <div className='card-body'>
        //             <h5 className='card-title'>{producto.nombre}</h5>
        //             <p className='card-text'>Modelo: {producto.modelo}</p>
        //             <p className='card-text'>Marca: {producto.marca}</p>
        //             <p className='card-text'>Precio: ${producto.precio}</p>
        //             <p className='card-text'>Stock: Quedan {producto.stock} unidades</p>
        //             <ItemCount stock = {producto.stock} onAdd={onAdd}/>
        //             <button id='finishToBuy' className='btn btn-warning'><Link to="/cart" className='nav-link'>Ir al carrito</Link></button>
        //         </div>
        //     </div>
        // </div>

        <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src= {producto.img} alt="Placeholder image" />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-48x48">
                <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image" />
              </figure>
            </div>
            <div className="media-content">
              <p className="title is-4">John Smith</p>
              <p className="subtitle is-6">@johnsmith</p>
            </div>
          </div>
          <div className="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus nec iaculis mauris. <a>@bulmaio</a>.
            <a href="#">#css</a> <a href="#">#responsive</a>
            <br />
            <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
          </div>
        </div>
      </div>

        
        
    );
    
}

export default ItemDetail;