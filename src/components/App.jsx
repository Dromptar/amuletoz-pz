import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { Component } from 'react';

//Components
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import Footer from './Footer/Footer';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './ItemListContainer/ItemListContainer';

//Others
import Loading from '../loading';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import 'bulma/css/bulma.min.css';

class App extends Component {

  state = {
    loading: true
  }

  componentWillMount = () => {
    setTimeout(() => {
      this.setState({
        loading: false
      })
    }, 2000);
  }

  render() {

    if (this.state.loading) {
      return <Loading/>
    }

    return (
      <>
          <BrowserRouter>
              <Navbar/>
              <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/products' element={<ItemListContainer/>}/>
                <Route path='/product/:id' element={<ItemDetailContainer/>}/>
                {/* <Route path='/cart' element={<Cart/>}/> */}
                <Route path='/category/:category' element={<ItemListContainer/>}/>
                {/* <Route path='/checkout' element={<Checkout/>}></Route> */}
              </Routes>
              <Footer/>
              <ToastContainer/>
          </BrowserRouter>
        
      
      </>  
    );
  }
}

export default App;
