import React, { useContext, useState } from 'react'
import { authenticationPost } from '../api/authenticationAPI'
import { AuthenticationContext } from '../context/AuthenticationContext'
import FadeAnimation from '../animation/FadeAnimation'

const LoginView = () => {
  const { setUser } = useContext(AuthenticationContext)
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const token = await authenticationPost({ user: { name, password } })
      setUser({ name, password, token })
    } catch(error) {
      console.log(error)
    }
  }

  return (
    <FadeAnimation id='LoginView'>
      <div id='Login'>
        <form className='form' onSubmit={ handleSubmit }>
          <div className='mb-3'>
            <label htmlFor='username' className='form-label'>Username</label>
            <input type='input' className='form-control' id='username' placeholder='username' value={ name } onChange={ event => setName(event.target.value) } />
          </div>
          <div className='mb-3'>
            <label htmlFor='password' className='form-label'>Password</label>
            <input id='password' className='form-control' type='password' value={ password } onChange={ event => setPassword(event.target.value) } placeholder='password' />
          </div>
          <button className='btn btn-primary main-button' style={{ borderColor: '#22b07d' }} type='submit'>Entrar</button>
        </form>
      </div>
    </FadeAnimation>
  )
}

export default LoginView