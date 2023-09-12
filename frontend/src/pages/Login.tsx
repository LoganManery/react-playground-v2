import React, {useState} from 'react'
import Login from '../components/Login'

const LoginPg: React.FC = () => {
  const [token, setToken] = useState<string | null>(null);

  const handleLoginSuccess = (token: string) => {
    setToken(token)
  }

  return (
    <>
      <div className="flex bg-gradient-to-bl from-amber-500 to-red-500 w-screen h-screen ">
        {!token ? <Login onLoginSuccess={handleLoginSuccess} /> : <h1>Logged in!</h1>}
      </div>
    </>
  )
}

export default LoginPg