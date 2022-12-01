import './assets/styles/App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Common/Header';
import Footer from './components/Common/Footer';
import './assets/styles/App.scss';
import React,{Fragment} from 'react'
import Home from './components/Home';
import WatchList from './components/Common/LocalStorage/WatchList';
import Seen from './components/Common/LocalStorage/Seen';
import Favorites from './components/Common/LocalStorage/Favorites';
import MidPage from './components/Common/MidPage';
import SearchBar from './components/Common/SearchBar';
import HomeContextProvider from './Contexts/HomeContext';


const App = () => {
  

  
    return(
  <Fragment>
    <BrowserRouter>
        
        <Header/>
        
        <Routes>
            <Route path="/" element={
            <HomeContextProvider>
              <Home />
            </HomeContextProvider>}/>
            <Route path='/watchlist' element={<WatchList/>} />
            <Route path='/seen' element={<Seen/>} />
            <Route path='/favorites' element={<Favorites/>} />

        </Routes>
        
    
        <Footer/>
       
    </BrowserRouter>
    
    </Fragment>
  )
}
export default App;