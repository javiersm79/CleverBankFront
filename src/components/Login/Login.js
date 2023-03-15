import React from "react";
//import { Navigate } from "react-router-dom";
import axios from "axios";


//const baseURL = "http://localserver:8888";
const baseURL = "http://localhost:8888";

class Login extends React.Component {
    state = {

        user: { name:"", rol: ""}

    };

    handleSubmit = (e) => {
        e.preventDefault();
        try {
            let user = this.login(e.target);
            this.setState({ user });
        } catch (error) {
            console.log(error)
        }
    };

    login = (e) => {
        console.log(e)
        const requestData = {
            email: e.elements.email.value,
            password: e.elements.password.value
        }

        axios
            .post(baseURL + "/v1/login", requestData)
            .then((response) => {
                console.log(response.data)

            }).catch((err) => {
            console.log(err.response.data)
        })
        return { name:"TESTAXIOS", rol: "TESTROL"}
    }

    render () {
        let { user, error } = this.state;
        return (
            <div>
                {error && <p>{error.message}</p>}
                {user && <p>{user.name}</p>}
                <form className="form" onSubmit={this.handleSubmit}>
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

}
export default Login
