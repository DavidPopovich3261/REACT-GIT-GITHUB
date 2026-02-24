import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../Context'

function Feedbek() {
    const { feedbek, setFeedbek, count, timer } = useContext(Context)
    const [win, setWin] = useState(false)

    useEffect(() => {
        if (count === 0) {
            setFeedbek("Winner!!!")
            setWin(true)
        }
        else if (timer < 0) {
            setFeedbek("Game Over!")
            setWin(false)
        }
    }, [count, timer, setFeedbek])

    if (!feedbek) return null
    return (
        <div className={feedbek != "" ? 'feedbek-box' : "feedbek-none"}>
            <h1 className={win ? "win" : "loss"}>{feedbek}</h1>
        </div>
    )
}

export default Feedbek