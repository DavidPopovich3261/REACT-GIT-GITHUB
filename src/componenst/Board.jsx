import React, { useContext, useEffect, useState } from 'react'
import { creatBoard } from '../utils/creatBoard'
import { Context } from '../Context'

function Board() {
    const [board, setBoard] = useState([])
    const {rows, cols, count} = useContext(Context)
    useEffect(() => {
        setBoard(creatBoard(rows, cols, count))

    }, [])
    return (
        <div className='grid'>
            {board.map((item, index) => {
                return (
                    <div key={index} className={item.className} ></div>//onClick={(e) => checkBox(e)}
                )
            })}
        </div>
    )
}

export default Board
