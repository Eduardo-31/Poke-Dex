import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';

const HomeInput = () => {

    const [charactersMin, setCharactersMin] = useState(false)
    const [charactersMax, setCharactersMax] = useState(false)
    
    const { register, handleSubmit, reset} = useForm()
    
    const navigate = useNavigate()
    
    const submit = data => {
      const name = data.userName.replace(/\s/g,'').length
      if(name > 2 && name <= 30){
        localStorage.setItem('name', data.userName)
        reset({userName: ''})
        navigate('/pokedex')
      }else if(name > 30){
        setCharactersMax(true)
        setTimeout(() => {
          setCharactersMax(false) 
        }, 2000);
      } else {
        setCharactersMin(true)
        setTimeout(() => {
          setCharactersMin(false) 
        }, 2000);
      }

    }

    

  return (
    <form className='form-home' onSubmit={handleSubmit(submit)}>
        <input placeholder='Your name...' type="text" {...register('userName')} />
        <button>Start</button>
        {
          charactersMin && <p className='form-character'>needs minimum 3 characters</p>
        }
        {
          charactersMax && <p className='form-character'>max characters exceeded(30)</p>
        }
    </form>
  )
}

export default HomeInput