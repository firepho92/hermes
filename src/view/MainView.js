import React from 'react'
import FadeAnimation from '../animation/FadeAnimation'
import { AuthenticationContext } from '../context/AuthenticationContext'
import List from '../components/List'
import CallView from './CallView'
import Header from '../components/Header'
import io from 'socket.io-client'

const MainView = () => {
  const { user } = React.useContext(AuthenticationContext)
  const [users, setUsers] = React.useState([])
  const [selectedUser, setSelectedUser] = React.useState(null)
  const [isCalling, setIsCalling] = React.useState(false)
  const [constraints, setConstraints] = React.useState(null)
  const socket = React.useRef()

  React.useEffect(() => {
    socket.current = io('ws://localhost:8000', {
      query: { token: user.token }
    })
    socket.current.on('allUsers', fetchedUsers => {
      setUsers(fetchedUsers.filter(fetchedUser => fetchedUser.name !== user.name))
    })
  }, [])

  const callUser = (data) => {
    setIsCalling(true)
    setConstraints(data)
  }

  const hangUp = () => {
    setIsCalling(false)
  }

  return (
    <FadeAnimation>
      <Header/>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 'calc(100vh - 56px)' }}>
        { !isCalling ? <List items={users} selectedItem={selectedUser} setSelectedItem={setSelectedUser} action={callUser}/> : <CallView mediaConstraints={constraints} selectedUser={selectedUser} hangUp={hangUp}/>}
      </div>
    </FadeAnimation>
  )
}

export default MainView