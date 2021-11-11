import React from 'react'
import ReactDOM from 'react-dom'
import Header from './components/header'


// IDEA: return div > h1 and h2
const App=()=>{
  return(
    <>
      <Header />
    </>
  )
}


// // IDEA: return h1 and h2
// const Application=()=>(
//   <React.Fragment>
//     <h1>hello</h1>
//     <h2>hello</h2>
//   </React.Fragmen>
//
// )

ReactDOM.render(<App />,document.getElementById('root'))
// ReactDOM.render(<Application />,document.getElementById('root'))
