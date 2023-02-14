import { Link } from "react-router-dom";

const Item = ({prod}) => {
    return (
      
        // <div className="card border-secondary mb-3 productCard" style={{maxWidth: '20rem'}}>
        //     <Link className="nav-link" to={`/product/${prod.id}`}><img src={prod.img} className="card-img-top" alt="..." /></Link>
        //     <div className="card-body">
        //     <div className="card-header">Marca: {prod.marca}</div>
        //         <h4 className="card-title">{prod.nombre}</h4>
        //         <p className="card-text">$ {new Intl.NumberFormat('de-DE').format(prod.precio)}</p>
        //         <button className="btn btn-dark"><Link className="nav-link" to={`/product/${prod.id}`}>Ver producto</Link></button>
        //     </div>
        // </div>

        
                <div className='column is-4-tablet is-3-desktop'>
                    <div className='card'>
                        <div className='card-image has-text-centered px-6'>
                            <img src={prod.img} alt="" />
                        </div>
                        <div className='card-content'>
                            <p className='title is-size-5'>{prod.nombre}</p>
                            <p>$ {new Intl.NumberFormat('de-DE').format(prod.precio)}</p>
                            <p className='title is-size-6'>Marca: {prod.marca}</p>
                        </div>
                        <footer className='card-footer'>
                            <p className='card-footer-item'>
                                <a href="" className='has-text-grey'>Ver</a>
                            </p>
                        </footer>
                    </div>
                </div>
        
    );
}

export default Item;
