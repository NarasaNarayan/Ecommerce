import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Form() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const storedEmail = localStorage.getItem('email') || 'abc@gmail.com';
    const storedPassword = localStorage.getItem('password') || 'admin';

    const submitHandler = (e) => {
        e.preventDefault();

        if (email === storedEmail && password === storedPassword) {
            alert('Login successful');
            // Redirect to another page after successful login
            navigate('/about');
        } else {
            alert('Please enter the correct username and password');
        }
    };

    return (
        <div>
            <form onSubmit={submitHandler}>
                <input
                    type='text'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='Enter your email'
                />
                <input
                    type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder='Password'
                />
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
}

export default Form;
