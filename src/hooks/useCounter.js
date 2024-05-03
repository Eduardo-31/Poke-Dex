import React from 'react'
import { useState } from 'react'

const useCounter = (initialState=0, limit=Infinity) => {
  const [counter, setCounter] = useState(initialState)
  
    const plusOne = () => {
        if(counter < limit){
            setCounter(counter + 1)
        }
    }

    const minusOne = () => {
        if(counter >= 1){
            setCounter(counter - 1)
        }
    }

    const reset = () => {
        setCounter(initialState)
    }


    return { counter, plusOne, minusOne, reset }

}

export default useCounter