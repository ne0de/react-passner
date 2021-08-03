import axios from "axios";
import { useContext, useState } from "react";

import UserContext from '../context/UserContext';

const PASSNER_API = 'http://localhost:5000'

const useForm = () => {
    const [form, setForm] = useState();

    const { handleLogin } = useContext(UserContext);

    const handleChange = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e, type) => {
        e.preventDefault();
        if (type === 'login') handleLogin(e, form);
        else {
            try {
                const res = await axios.post(PASSNER_API + '/user/' + type, form);
                localStorage.setItem('flash-message', JSON.stringify({ message: res.data, type: 'success' }));
                window.location.reload();
            } catch (err) {
                localStorage.setItem('flash-message', JSON.stringify({ message: err.response.data, type: 'warning' }));
                window.location.reload();
            }
        }

    };


    return [handleChange, handleSubmit];
}

export default useForm;