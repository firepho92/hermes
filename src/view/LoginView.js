import React, { useState } from 'react'

const LoginView = () => {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(name)
    console.log(password)
  }

  return (
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
        <button className='btn btn-primary' type='submit'>Entrar</button>
      </form>
    </div>
  )
}

export default LoginView