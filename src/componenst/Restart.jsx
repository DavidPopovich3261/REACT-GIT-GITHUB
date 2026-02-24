import React, { useContext } from 'react'
import { Context } from '../Context'

function Restart() {
    const { setCount, setTimer, primaryVariables, restart, setRestart, setFeedbek} = useContext(Context)
    function restartgame() {
        setRestart(!restart)
        setTimer(primaryVariables.timer)
        setCount(primaryVariables.count)
        setFeedbek("")
    }
    return (
        <div>
            <button className='restart' onClick={restartgame}> Restart game</button>
        </div>
    )
}

export default Restart