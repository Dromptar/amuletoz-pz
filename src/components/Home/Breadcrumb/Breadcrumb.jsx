import React from 'react';
import './breadcrumb.css'

const Breadcrumb = () => {
    return (
        <>
        <section id='breadcrumb'>
            <div>
                <h1 id='title'>Bienvenides a Amuletos.Pz</h1>
                <h2>
                    <a class="button is-success is-light is-large">Nuestra oferta</a>
                    <a class="button is-success is-large">Saber más!</a>
                </h2>
            </div>
            <div id='subtitle'>
                <p>“Todas las creencias, sean cuales sean, son verdaderas para quien las cree” - Sócrates</p>
            </div>
        </section>
            
        </>
    );
}

export default Breadcrumb;
