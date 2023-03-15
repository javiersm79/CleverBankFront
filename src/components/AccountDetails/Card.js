import React from "react";
import "./Card.css";

export default class Card extends React.Component {
    render() {
        return (
            <div style={{ width: this.props.width + "px" }}>
                <div className="styleCard">
                    <select onChange={this.props.getAccountDetails}>
                        <option>Please choose one Account</option>
                        <option key="001-1234-456" >
                            001-1234-456
                        </option>
                    </select>
                    <p className="styleCardTitle">{this.props.number}</p>
                    <p className="styleLocationLabel">{this.props.type}</p>
                    <p className="styleDescription">{this.props.balance}</p>
                </div>
            </div>
        );
    }
}

Card.defaultProps = {
    width: 350,
    number: "-",
    type: "-",
    Balance: "$0"
};
