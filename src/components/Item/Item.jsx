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

        
                // <div className='column is-4-tablet is-3-desktop'>
                //     <div className='card'>
                //         <div className='card-image has-text-centered px-6'>
                //             <img src={prod.img} alt="" />
                //         </div>
                //         <div className='card-content'>
                //             <p className='title is-size-5'>{prod.nombre}</p>
                //             <p>$ {new Intl.NumberFormat('de-DE').format(prod.precio)}</p>
                //             <p className='title is-size-6'>Marca: {prod.marca}</p>
                //         </div>
                //         <footer className='card-footer'>
                //             <p className='card-footer-item'>
                //                 <a href="" className='has-text-grey'>Ver</a>
                //             </p>
                //         </footer>
                //     </div>
                // </div>
            
                <div class="card">
                <div class="card-image">
                    <figure class="image is-500x500">
                        <img src={prod.img} alt="Placeholder image"/>
                    </figure>
                </div>
                <div class="card-content">
                    <div class="media">
                        {/* <div class="media-left">
                            <figure class="image is-48x48">
                                <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image"/>
                            </figure>
                        </div> */}
                        <div class="media-content">
                            <p class="title is-4">{prod.nombre}</p>
                            <p class="subtitle is-5">${prod.precio}</p>
                            <p class="subtitle is-6">{prod.marca}</p>
                        </div>
                    </div>
    
                    <div class="content has-text-centered">
                        <button class="button is-danger is-light">Ver</button>
                    </div>
                </div>
            </div>
                
        
    );
}

export default Item;
