import './App.css'
import { Provider } from './Context'
import Board from './componenst/Board'
import Feedbek from './componenst/Feedbek'
import Header from './componenst/Header'
import Timer from './componenst/Timer'

function App() {

  return (
    <>
      <Provider >
        <Header/>
        <Feedbek/>
        <Board />
      </Provider>
    </>
  )
}

export default App
