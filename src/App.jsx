import './App.css'
import { Provider } from './Context'
import Board from './componenst/Board'

function App() {

  return (
    <>
    <Provider >
        <Board/>
    </Provider>
    </>
  )
}

export default App
