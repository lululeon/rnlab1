import React, { useReducer } from 'react'

export default (reducer, actions, initialState) => {
  const Context = React.createContext()

  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const boundActions = {}

    // make the distpatch method available to all passed in actions:
    for (let key in actions) {
      boundActions[key] = actions[key](dispatch)
    }

    return (
      <Context.Provider
        value={{
          state,
          ...boundActions,
        }}
      >
        {children}
      </Context.Provider>
    )
  }

  return { Context, Provider }
}
