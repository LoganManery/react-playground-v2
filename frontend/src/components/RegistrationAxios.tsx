import React, { useState } from 'react';
import axios from 'axios';

function RegistrationForm() {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        email: '',
    });

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await axios.post('https://your_backend_url/user', formData);

            console.log(response.data.message);
        } catch (error) {
            console.error('There was an error!', (error as Error).message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={formData.username} 
                onChange={e => setFormData({ ...formData, username: e.target.value })}
                placeholder="Username"
            />
            <input 
                type="password" 
                value={formData.password} 
                onChange={e => setFormData({ ...formData, password: e.target.value })}
                placeholder="Password"
            />
            <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})} 
            />
            <button type="submit">Register</button>
        </form>
    );
}

export default RegistrationForm;
