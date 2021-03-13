import React from 'react'

const AuthenticationContext = React.createContext()

const { Provider } = AuthenticationContext

function AuthenticationContextProvider(props) {
  const [user, setUser] = React.useState(null)

  return (
    <Provider value={{ user, setUser }}>
      { props.children }
    </Provider>
  )
}

export default AuthenticationContext
export { AuthenticationContextProvider, AuthenticationContext }