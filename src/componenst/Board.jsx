import React, { useContext, useEffect, useState } from 'react'
import { creatBoard } from '../utils/creatBoard'
import { Context } from '../Context'

function Board() {
    const [board, setBoard] = useState([])
    const { rows, cols, count, setCount,feedbek, restart } = useContext(Context)
    useEffect(() => {
        setBoard(creatBoard(rows, cols, count))

    }, [restart])
    function clicked(index) {
        if (board[index].clicked || count === 0 || feedbek === "Game Over!") {
            return
        }
        if (board[index].className === "bomb") {
            setCount(count - 1)
        }
        setBoard(prevBoard => {
            const newBoard = [...prevBoard]
            newBoard[index] = {
                ...newBoard[index],
                className: `${newBoard[index].className}-disply`,
                clicked: true
            }

            return newBoard
        })
    }
    return (
        <>
            <div className='grid'>
                {board.map((item, index) => {
                    return (
                        <div key={index} className={item.className} onClick={() => clicked(index)} ></div>
                    )
                })}
            </div>
        </>
    )
}

export default Board
