import './App.css'
import { Provider } from './Context'
import Board from './componenst/Board'
import Restart from './componenst/Restart'
import Timer from './componenst/Timer'

function App() {

  return (
    <>
      <Provider >
        <Timer />
        <Restart />
        <Board />
      </Provider>
    </>
  )
}

export default App
