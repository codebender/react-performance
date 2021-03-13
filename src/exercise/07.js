// Production performance monitoring
// http://localhost:3000/isolated/exercise/07.js

import * as React from 'react'
import reportProfile from '../report-profile'

function Counter() {
  const [count, setCount] = React.useState(0)
  const increment = () => setCount(c => c + 1)
  return <button onClick={increment}>{count}</button>
}

function App() {
  return (
    <div>
      <div>
        Profiled counter
        <React.Profiler id="counter" onRender={reportProfile}>
          <Counter />
        </React.Profiler>
      </div>
      <div>
        Unprofiled counter
        <Counter />
      </div>
    </div>
  )
}

export default App
