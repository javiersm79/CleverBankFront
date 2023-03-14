import React from "react";
//import { Navigate } from "react-router-dom";

class Login extends React.Component {
    state = {

        user: { name:"", rol: ""}

    };

    handleSubmit = (e) => {
        e.preventDefault();
        try {
            let user = { name:"JJ", rol: "Admin"}
            //let user = await login(e.target);
            this.setState({ user });
        } catch (error) {
            console.log(error)
        }
    };


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
