import React, { useState } from 'react'

const Login = () => {
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
        <div class='mb-3'>
          <label for='username' class='form-label'>Username</label>
          <input type='input' class='form-control' id='username' placeholder='username' value={ name } onChange={ event => setName(event.target.value) } />
        </div>
        <div class='mb-3'>
          <label for='password' class='form-label'>Password</label>
          <input id='password' className='form-control' type='password' value={ password } onChange={ event => setPassword(event.target.value) } />
        </div>
        <button className='btn btn-primary' type='submit'>Entrar</button>
      </form>
    </div>
  )
}

export default Login