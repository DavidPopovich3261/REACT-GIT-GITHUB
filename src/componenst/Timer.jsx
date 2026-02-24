import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../Context';

function Timer() {
    const { count, setFeedbek} = useContext(Context)
    const [timer, setTimer] = useState(200)
    const [uitimer, setUitimer] = useState({
        minutes: 0,
        seconds: 0
    })
    useEffect(() => {
        setTimeout(() => {
            setTimer(timer - 1)
            if (timer < 0 || count === 0) {
                setFeedbek("Game Over!")
                return false
            }
            setUitimer({ minutes: (Math.floor(timer / 60)), seconds: (timer % 60) })
        }, 1000);
    }, [timer])

    return (
        <div>
            <h1>{uitimer.minutes}:{uitimer.seconds}</h1>
        </div>
    )
}

export default Timer