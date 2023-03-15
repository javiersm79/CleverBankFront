

import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";
//import { Navigate } from "react-router-dom";

export default function AccountDetails() {
    let navigate = useNavigate();
    useEffect(() => {
        let token = localStorage.getItem('token');

        if (token === "" || token === null) {
            alert("Sesión Inválida")
            localStorage.clear()
            navigate("/")
        }
    }, );

    return (
        <div>
            <p>Home Component</p>
        </div>
    )
}
