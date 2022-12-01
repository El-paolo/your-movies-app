import React from 'react'
import { Fragment } from 'react';
import Card from 'react-bootstrap/Card';
import Img from '../../components/Common/Img';
import { getImg } from '../../constants'
import '../../assets/styles/components/Movie.scss'


const Movie = ({id, title, overView, poster_path, rating }) => (

    <Fragment >

      <div className='movie-container d-flex flex-column align-items-center justify-content-space-between' >
      
      
        <Img alt={`${title} poster`} src ={`${getImg('w500', poster_path)}`}  />
        
        <h3>{title}</h3>
        
          <h4>{rating}</h4>
        
      <button className='' >more details</button>
        

      </div>
    </Fragment>
    
  
)

export default Movie;