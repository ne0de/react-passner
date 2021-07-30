import axios from "axios";
import { useState } from "react";
import env from "react-dotenv";

const useForm = () => {

    const [form, setForm] = useState();

    const handleChange = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
        console.log(form);
    };

    const handleSubmit = async e => {
        try {
            e.preventDefault();
            console.log(env.PASSNER_API_URL)
            await axios.post(env.PASSNER_API_URL + '/user/register', form, {withCredentials: true}).then(res => {
                console.log(res)
            }).catch(e => {
                console.error('There was an error!', e);
            });
        } catch (e) { console.log(e) }


    };


    return [handleChange, handleSubmit];
}

export default useForm;