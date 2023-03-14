import React from "react";

export default function Login() {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("do handleSubmit");
    };
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
                <button className="primary">ENTRAR--------</button>
            </form>
        </div>
    )
}
