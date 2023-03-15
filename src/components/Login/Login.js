import React, {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";


const baseURL = process.env.REACT_APP_API_URL;

const Login = () => {
    let navigate = useNavigate();

    const [userInfo, setUserInfo] = useState({ email:"", token: ""});

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            login(e.target);
        } catch (error) {
            console.log(error)
        }
    };

    const login = (e) => {
        const requestData = {
            email: e.elements.email.value,
            password: e.elements.password.value
        }

        axios.post(baseURL + "/v1/login", requestData)
            .then((response) => {
                setUserInfo(response.data)
                navigate(`/accountDetails`);
                localStorage.setItem('token', response.data.token);
            }).catch((err) => {
                alert("Usuario y/o Password incorrectos")
                localStorage.clear()
                navigate(`/`)
        })
        return userInfo
    }

    return (
            <div>
                <form className="form" onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" placeholder="your@email.com" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" />
                    </div>
                    <button className="primary">Sing In</button>
                </form>
            </div>
    )

}
export default Login
