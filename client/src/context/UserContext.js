import axios from "axios";
import { createContext, useEffect, useState } from "react";
import history from "../utils/history";

import jwt_decode from "jwt-decode";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const loggedUserJSON = localStorage.getItem('currentUser');
        if (loggedUserJSON) {
            const user = JSON.parse(loggedUserJSON);
            let currentDate = new Date();
            const decodedToken = jwt_decode(user.accessToken);
            if (decodedToken.exp * 1000 < currentDate.getTime()) {
                localStorage.removeItem('currentUser');
                setUser(null);
                history.push("/");
                history.go(0);
            } else {
                setUser(user);
            }
        }
    }, [])

    const handleLogin = async (e, form) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/user/login', form);
            setUser(res.data);
            localStorage.setItem('currentUser', JSON.stringify(res.data));
            history.push("/profile");
        } catch (err) {
            localStorage.setItem('flash-message', JSON.stringify({ message: err.response.data, type: 'warning' }));
            history.go(0);
        }
    }

    const handleLogout = async e => {
        e.preventDefault()
        try {
            const res = await axios.post('http://localhost:5000/user/logout');
            localStorage.setItem('flash-message', JSON.stringify({ message: res.data, type: 'success' }));
            localStorage.removeItem('currentUser');
            history.push("/");
            history.go(0);
        } catch (error) {
            console.log(error.response.data);
        }
    };

    const data = { user, handleLogin, handleLogout };
    return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export { AuthProvider };
export default AuthContext;