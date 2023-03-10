import {useState, useEffect, useContext } from "react";
import ItemList from "../ItemList/ItemList";
import {getProductos} from '../../assets/firebase.js'
import { useParams } from "react-router-dom";
// import { DarkModeContext} from "../../context/darkMode";

const ItemListContainer = () => {

    const [products, setProducts] = useState([]);
    const {category} = useParams()

    // const{darkMode, toggleDarkMode} = useContext(DarkModeContext);
    useEffect(() => {    
      if(category) {
        getProductos().then(productos => {
        const productsList = productos.filter( prod => prod.idCategoria === parseInt(category))
        const productsCard = ItemList({productsList});
        setProducts(productsCard);
        })
      } else {
          getProductos().then(productsList => {
          const productsCard = ItemList({productsList});
          setProducts(productsCard);
          })
        }
  } , [category]);

    return (
      <div className= 'row productsListCard' >
            {products}
      </div> 
    )
}

export default ItemListContainer;
