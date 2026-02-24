import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../Context';

function Timer() {
    const { count } = useContext(Context)
    const [timer, setTimer] = useState(70)
    const [uitimer, setUitimer] = useState({
        minutes: 0,
        seconds: 0
    })
    useEffect(() => {
        setTimeout(() => {
            setTimer(timer - 1)
            if (timer < 0 || count === 0) {
                return false
            }
            setUitimer({ minutes: (Math.floor(timer / 60)), seconds: (timer % 60) })
        }, 1000);
    }, [timer])

    return (
        <div>
            <p>{uitimer.minutes}:{uitimer.seconds}</p>
        </div>
    )
}

export default Timer