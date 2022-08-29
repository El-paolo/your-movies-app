import './assets/styles/App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Common/Header';
import Footer from './components/Common/Footer';
import './assets/styles/App.scss';
import React,{Fragment} from 'react'
import WatchList from './components/WatchList';
import Seen from './components/Seen';
import Favorites from './components/Favorites';


const App = () => {
  

  
    return(
  <Fragment>
    <BrowserRouter>
        
        <Header/>
        
        <Routes>
            <Route path='/' element={<WatchList/>} />
            <Route path='/seen' element={<Seen/>} />
            <Route path='/favorites' element={<Favorites/>} />

        </Routes>
    
        <Footer/>
       
    </BrowserRouter>
    
    </Fragment>
  )
}
export default App;