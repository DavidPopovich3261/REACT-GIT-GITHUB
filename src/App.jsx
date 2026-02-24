import './App.css'
import { Provider } from './Context'
import Board from './componenst/Board'
import Timer from './componenst/Timer'

function App() {

  return (
    <>
      <Provider >
        <Board />
        <Timer />
      </Provider>
    </>
  )
}

export default App
