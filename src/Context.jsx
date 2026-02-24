import { createContext, useState } from "react";

const Context = createContext();

function Provider({ children }) {
    const [count, setCount] = useState(5);
    const [rows, setRows] = useState(10);
    const [cols, setCols] = useState(10);

    return (
        <Context value={{ count, setCount, rows, setRows, cols, setCols }}>
            {children}
        </Context>
    );
}

export { Provider, Context };