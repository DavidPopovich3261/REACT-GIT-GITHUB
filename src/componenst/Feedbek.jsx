import React, { useContext, useState } from 'react'
import { Context } from '../Context'

function Feedbek() {
    const {feedbek, setFeedbek, count, timer} = useContext(Context)
    const [win, setWin] = useState(false)
    if (count === 0){
        setFeedbek("Winner!!!")
        setWin(true)
    }
    if (timer < 0){
        setFeedbek("Game Over!")
    }
  return (
    <div className='feedbek-box'>
      <h1 className={win? "win": "loss"}>{feedbek}</h1>
    </div>
  )
}

export default Feedbek
