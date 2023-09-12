import React, { useState } from 'react'

interface LoginProps {
  onLoginSuccess: (token: string) => void
}

const Login: React.FC<LoginProps> = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Call backend API
    try {
      const response = await fetch('https://127.0.0.1:3000/login/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
        credentials: 'include',
      })
      
      if (!response.ok) {
        throw new Error(`${response.status} - ${response.statusText}`)
      }

      const data = await response.json()

      if (data.token) {
        onLoginSuccess(data.token)
      } else {
        setError('Invalid login credentials')
      } 
    } catch (err) {
      setError('Failed to login')
    }
  }

  return (
    <>
    <form className="
      flex 
      flex-col 
      justify-center
      m-auto 
      border-2 
      rounded-lg
      shadow-md
      gap-2
      border-purple-500
      shadow-slate-950
      bg-gradient-to-bl  
      from-sky-500
      to-green-500
      hover:bg-sky-700 
      sm:w-1/2
      md:w-1/3
      lg:w-1/4
      xl:w-1/5
      h-1/2" onSubmit={handleSubmit}>
        <h1
          className="
            mx-auto 
            text-center 
            w-1/2 
            text-2xl 
            font-bold
            font-mono
            underline
            decoration-solid
            "
        >Registration Form</h1>
        <input
              className="text-center w-1/2 mx-auto rounded-lg border-2 border-slate-900" 
              type="text"
              placeholder="Username"
              value={username}
              onChange={(user) => setUsername(user.target.value)} 
              required
        />
        <input
              className="text-center w-1/2 mx-auto rounded-lg border-2 border-slate-900"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(pass) => setPassword(pass.target.value)} 
              required
        />
        <p
          className="text-center mx-auto w-1/2 text-xs"
        >Forgot your <a href="">username</a> or <a href="">password</a>?</p>
        <button 
            type="submit"
            className="
              my-1
              mx-auto 
              bg-pink-200
              border-2
              rounded-lg
              border-slate-900
              sm:w-1/2
              md:w-1/2
              lg:w-1/2
              xl:w-1/2
              2xl:w-1/2
            "
        >Login</button>
    </form>
    {error && <p>{error}</p>}
    </>
  );
}

export default Login