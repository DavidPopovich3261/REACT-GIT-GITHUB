import { createContext, useEffect, useState } from "react";

const Context = createContext();

function Provider({ children }) {
    const [primaryVariables, setPrimaryVariables] = useState({
        count: 5,
        rows: 10,
        cols: 10,
        timer: 120
    })
    const [count, setCount] = useState(primaryVariables.count);
    const [rows, setRows] = useState(primaryVariables.rows);
    const [cols, setCols] = useState(primaryVariables.cols);
    const [timer, setTimer] = useState(primaryVariables.timer)
    const [restart, setRestart] = useState(true)

    return (
        <Context value={{
            count, setCount,
            rows, setRows,
            cols, setCols,
            timer, setTimer,
            primaryVariables, setPrimaryVariables,
            restart, setRestart
        }}>
            {children}
        </Context>
    );
}

export { Provider, Context };