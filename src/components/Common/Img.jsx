import React from 'react'
import { getImg } from '../../constants';
import '../../assets/styles/components/Img.scss';
const Img = (props) => {
  const { src, title } = props;
    return (
    <div className='img-container'>
    
    <img className='movie-img' src={`${src}`} alt={title} />
    </div>
  )
}

export default Img;