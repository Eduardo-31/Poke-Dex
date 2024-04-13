import React from 'react'
import './Footer.css'

const Footer = () => {


  return (


    <footer>
            
        <div className='card-link'>
            <a href='https://www.linkedin.com/in/eduardo-izacupe-5662a8245/' target='_blank' className='a-footer' ><i className="fa-brands fa-linkedin-in"></i></a>
            {
            //<a className='a-footer' ><i className="fa-brands fa-instagram"></i></a>
            }
            <a href='https://github.com/Eduardo-31/Poke-Dex.git' target='_blank' className='a-footer' ><i className="fa-brands fa-github"></i></a>
        </div>
        <div className='footer-line'></div>
        <p>Designed and made by: Eduardo Izacupe Coello</p>
        <p>Copyright © 2022 - All rights reserved</p>
     
    </footer>
  )
}

export default Footer