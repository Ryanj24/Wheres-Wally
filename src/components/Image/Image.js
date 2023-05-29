import React from 'react'
import './Image.css'
import img from '../../assets/main-img.jpg'

const Image = () => {
  return (
    <div className='image-container'>
        <img src = {img} alt="Img"/>
    </div>
  )
}

export default Image