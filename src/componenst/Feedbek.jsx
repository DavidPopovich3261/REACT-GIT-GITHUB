import React, { useContext } from 'react'
import { Context } from '../Context'

function Feedbek() {
    const {feedbek, setFeedbek, count, timer} = useContext(Context)
    if (count === 0){
        setFeedbek("Winner!!!")
    }
    if (timer < 0){
        setFeedbek("Game Over!")
    }
  return (
    <div>
      <h1>{feedbek}</h1>
    </div>
  )
}

export default Feedbek
