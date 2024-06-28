import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { connect } from 'react-redux'

import selectors from './infra/redux-old/selectors'
import actions from './infra/redux-old/actions'

interface AppProps {
  count: number
  increment: () => any
  incrementAmmount: ({payload}: any) => any
}

function App({count,increment,incrementAmmount}: AppProps) {

const handleCountClick = ()=> {
  increment()
}
const handleCountClickAmmount = ()=> {
  incrementAmmount({payload:10})
}

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={handleCountClick}>
          count is {count}
        </button>
        <button onClick={handleCountClickAmmount}>
          Increment ammount
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}


export default connect(selectors,actions)(App)
