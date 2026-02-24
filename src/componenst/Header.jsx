import React, { useContext } from 'react'
import { Context } from '../Context'
import Timer from './Timer'

function Header() {
    const { rows, cols, count } = useContext(Context)
    return (
        <div className='header'>
            <div>
                <h3>Bombs Remaining</h3>
                <h1>{count}</h1>
            </div>
            <div>
                <h3>Time Remaining</h3>
                <Timer />
            </div>
            <div>
                <h3>Board Size</h3>
                <h1>{rows} * {cols}</h1>
            </div>
        </div>
    )
}

export default Header
