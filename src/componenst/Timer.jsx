import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../Context';
// import { useInterval } from './useInterval'

function Timer() {
    const { count, setCount } = useContext(Context)
    const [timre, setTimre] = useState(70)
    const [uitimer, setUitimer] = useState({
        minutes: 0,
        seconds: 0
    })
    useEffect(() => {
        setTimeout(() => {
            setTimre(timre - 1)
            if (timre < 0 && count != 0) {
                return false
            }
            setUitimer({ minutes: (Math.floor(timre / 60)), seconds: (timre % 60) })
        }, 1000);
    }, [timre])

    return (
        <div>
            <p>{uitimer.minutes}:{uitimer.seconds}</p>
            <p></p>
        </div>
    )
}

export default Timer