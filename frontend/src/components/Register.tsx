import React, { useState } from 'react';

export default function RegistrationForm() {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        email: '',
    });

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
 
      e.preventDefault();

        try {
            console.log(formData)
            const response = await fetch('https://127.0.0.1:3000/user/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData),
                credentials: 'include'
            });
            console.log('Full response: ', response)
            const data = await response.json();
            console.log('parsed data: ', data)
        
            if(response.ok) {
                console.log(data.message);
            } else {
                console.error(data.message);
            }
        } catch (err) {
            console.error('There was an error!', err)
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
                  value={formData.username}
                  onChange={(user) => setFormData({...formData, username: user.target.value})}
            />
            <input
                  className="text-center w-1/2 mx-auto rounded-lg border-2 border-slate-900"
                  type="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={(pass) => setFormData({...formData, password: pass.target.value})}
            />
            <input
                  className="text-center w-1/2 mx-auto rounded-lg border-2 border-slate-900"
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(em) => setFormData({...formData, email: em.target.value})}
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
            >Register</button>
        </form>
        </>
    );
}