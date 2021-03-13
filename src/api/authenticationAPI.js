import axios from 'axios'

const authenticationPost = async(user) => {
  try { 
    const { data } = await axios.post('http://localhost:8000/authentication', { user })
    return data
  } catch(error) {
    throw error
  }
}

export { authenticationPost }