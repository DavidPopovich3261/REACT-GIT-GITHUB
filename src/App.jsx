import './App.css'
import { Provider } from './Context'
import Board from './componenst/Board'
import Feedbek from './componenst/Feedbek'
import Header from './componenst/Header'
import Restart from './componenst/Restart'
import Timer from './componenst/Timer'

function App() {

  return (
    <>
      <Provider >
        <Header/>
        <Feedbek/>
        <Board />
        <Restart />
      </Provider>
    </>
  )
}

export default App
