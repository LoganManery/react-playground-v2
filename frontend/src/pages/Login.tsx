import React, {useState} from 'react'
import Login from '../components/Login'

const LoginPg: React.FC = () => {
  const [token, setToken] = useState<string | null>(null);

  const handleLoginSuccess = (token: string) => {
    setToken(token)
  }

  return (
    <>
      <div className="flex bg-gradient-to-b from-sky-200 to-rose-200 w-screen h-screen ">
        {!token ? <Login onLoginSuccess={handleLoginSuccess} /> : <h1>Logged in!</h1>}
      </div>
    </>
  )
}

export default LoginPg