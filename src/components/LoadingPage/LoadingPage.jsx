import React from 'react'
import './LoadingPage.css'

const LoadingPage = () => {
  return (
    <section className='container-loading-page'>
      <div className='loading-page'>
        <p>Loading...</p>
        <div className="container">
          <div className="progress"></div>
        </div>
        <div className='loading-page-img'>
          <img src='http://img4.wikia.nocookie.net/__cb20140430000041/fantendo/images/4/48/Pikachu_running_animation_by_cadetderp-d5407a9.gif' alt="loading Pikachu running" />
        </div> 
      </div>
    </section>
  )
}

export default LoadingPage