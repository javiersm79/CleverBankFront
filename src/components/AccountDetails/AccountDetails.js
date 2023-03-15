

import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import Card from "./Card";
import axios from "axios";

const baseURL = process.env.REACT_APP_API_URL;

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

    const [accountInfo, setAccountInfo] = useState({ accountType: "", number: "", balance: 0});
    const GetAccountDetails = (id) => {
        let token = localStorage.getItem('token');
        console.log("idAccount", id.target.value)

        const config = {
            headers:{
                Authorization: token
            }
        };

        axios.get(baseURL + "/v1/balance?account=" + id.target.value, config)
            .then((response) => {
                console.log(response.data)
                setAccountInfo(response.data)
                navigate(`/accountDetails`);

            }).catch((err) => {
            alert("Usuario y/o Password incorrectos")
            localStorage.clear()
            navigate(`/`)
        })

    }


    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%"
        }}>

            <Card
                getAccountDetails={GetAccountDetails}
                /*getAccountDetails = {GetAccountDetails}*/
                number={accountInfo.number}
                type={accountInfo.accountType}
                balance={accountInfo.balance}
            />
        </div>
    )
}
