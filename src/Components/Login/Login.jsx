import React from 'react';
import LoginForm from './LoginForm';
import LoginCreate from './LoginCreate';
import LoginPasswordLost from './LoginPasswordLost';
import LoginPasswordReset from './LoginPasswordReset';
import { Routes, Route } from 'react-router';
import { UserContext } from '../../UserContext';
import { Navigate } from 'react-router-dom';

const Login = () => {
    const { login } = React.useContext(UserContext);

    if(login === true) return <Navigate to="/conta" />

    return (
        <div>
            <Routes>
                <Route path="/" element={<LoginForm />} />
                <Route path="criar" element={<LoginCreate />} />
                <Route path="perdeu" element={<LoginPasswordLost />} />
                <Route path="resetar" element={<LoginPasswordReset />} />
            </Routes>
        </div>
    )
}

export default Login;
