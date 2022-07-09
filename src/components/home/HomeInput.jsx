import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux';
import { setUserName } from '../../slices/nameUser.slice';
import { useNavigate } from 'react-router-dom';

const HomeInput = ({setIsLogged}) => {

    
    const name = useSelector(state => state.nameUser)
    const { register, handleSubmit, reset} = useForm()
    
    const navigate = useNavigate()
    const dispatch = useDispatch()
   

    const submit = data => {
      const name = data.userName
      if(name.length > 2){
        setIsLogged(true)
        dispatch(setUserName(data.userName))
        reset({userName: ''}),
        navigate('/pokedex')
        localStorage.setItem('name', data.userName)
      }

    }

    console.log(localStorage)
    


  return (
    <form className='form-home' onSubmit={handleSubmit(submit)}>
        <input placeholder='Your name...' type="text" {...register('userName')} />
        <button>Start</button>
    </form>
  )
}

export default HomeInput