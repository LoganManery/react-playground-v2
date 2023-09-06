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
            const response = await fetch('http://127.0.0.1/user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

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
        <form className="flex flex-col justify-center my-auto border-2 rounded-lg bg-orange-500 hover:bg-sky-700 w-1/3 h-1/2" onSubmit={handleSubmit}>
            <input
                className="m-1" 
                type="text"
                placeholder="Username"
                value={formData.username}
                onChange={(user) => setFormData({...formData, username: user.target.value})}
            />
            <input
                className="m-1"
                type="password"
                placeholder="Password"
                value={formData.password}
                onChange={(pass) => setFormData({...formData, password: pass.target.value})}
            />
            <input
                className="m-1"
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(em) => setFormData({...formData, email: em.target.value})}
            />
            <button 
                type="submit"
                className="m-1"
            >Register</button>
        </form>
        </>
    );
}