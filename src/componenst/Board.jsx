import React, { useContext, useEffect, useState } from 'react'
import { creatBoard } from '../utils/creatBoard'

function Board() {
    const [board, setBoard] = useState([])
    // const {rows, cols, count} = useContext(Context()) מחכה לקוד של דוד
    useEffect(() => {
        // setBoard(creatBoard(rows, cols, count)) מחכה לקוד של דוד
        setBoard(creatBoard(10, 10, 5)) //בינתיים עד שהקוד של דוד מגיע

    }, [])
    function clicked(index) {
        if (board[index].clicked) {
            return
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
        <div className='grid'>
            {board.map((item, index) => {
                return (
                    <div key={index} className={item.className} onClick={() => clicked(index)} ></div>
                )
            })}
        </div>
    )
}

export default Board
