import axios from "axios";
import { createContext, useEffect, useState } from "react";
//import jwt_decode from "jwt-decode";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const loggedUserJSON = localStorage.getItem('currentUser');
        if (loggedUserJSON) {
            const user = JSON.parse(loggedUserJSON);
            setUser(user);
        }
    }, [])

    const handleLogin = async (e, form) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/user/login', form);
            console.log(res)
            setUser(res.data);
            localStorage.setItem('currentUser', JSON.stringify(res.data));
        } catch (err) {
            localStorage.setItem('flash-message', JSON.stringify({ message: err.response.data, type: 'warning' }));
            window.location.reload();
        }
    }

    const handleLogout = async e => {
        try {
            const res = await axios.post('http://localhost:5000/user/logout');
            localStorage.setItem('flash-message', JSON.stringify({ message: res.data, type: 'success' }));
            localStorage.removeItem('currentUser');
        } catch (error) {
            console.log(error.response.data);
        }
        window.location.reload();
    };

    const data = { user, handleLogin, handleLogout };

    return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export { AuthProvider };
export default AuthContext;