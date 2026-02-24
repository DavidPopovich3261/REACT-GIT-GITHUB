import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../Context';

function Timer() {
    const { count, timer, setTimer } = useContext(Context)
    const [uitimer, setUitimer] = useState({ minutes: (Math.floor(timer / 60)), seconds: (timer % 60) })
    useEffect(() => {
        const time= setTimeout(() => {
            setTimer(timer - 1)
            if (timer < 0 || count === 0) {
                return false
            }
            setUitimer({ minutes: (Math.floor(timer / 60)), seconds: (timer % 60) })
        }, 1000);
        return ()=> clearTimeout(time)
    }, [timer])

    return (
        <div>
            <p>{uitimer.minutes}:{uitimer.seconds}</p>
        </div>
    )
}

export default Timer