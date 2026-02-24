import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../Context';
import { useInterval } from './useInterval'

function Timer() {
    const { count, setCount } = useContext(Context())
    const [timre, setTimre] = useState({
        minutes: 2,
        seconds: 0
    })
    useEffect(() => {
        setTimeout(() => {
            if (count != 0) {
                return false
            }
        }, );
    }, [])

    useEffect(() => {
        useInterval(() => {
            setTimre(timre - 1)
        }, 1000);
    })

    return (
        <div>

        </div>
    )
}

export default Timer