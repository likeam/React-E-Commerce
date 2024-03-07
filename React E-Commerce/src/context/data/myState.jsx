import React from 'react'
import MyContext from './MyContext';

function MyState(props) {
    const state = {
        name: "Hania Abdul Rehman",
        class: "1 B"
    }
  return (
    <MyContext.Provider value={state}>
       {props.children}
    </MyContext.Provider>
  )
}

export default MyState