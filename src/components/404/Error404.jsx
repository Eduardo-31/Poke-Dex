import React from 'react'
import { useNavigate } from 'react-router-dom'
import pikachu404 from '../img/pikachu404.png'

const Error404 = () => {

    const navigate = useNavigate()


    const backHome = () => {
        navigate('/')
    }


  return (
    <section className='section-404'>

        <div className='container-404'>
            <p className='text-404_error'>ERROR</p>
            <div className='text-404'>
                <p>4</p>
                <div className='circle-404'>
                    <img src={pikachu404} alt="" />
                </div>
                <p>4</p>
            </div>

            <p className='text-404_pnf'>Page Not Found</p>
            <p className='text-404_sorry'>sorry! the page you're looking for is not here.</p>
            <button onClick={backHome} className='btn-404_back_home'>Back home</button>

        </div>

    </section>
  )
}

export default Error404