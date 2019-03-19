import React from "react";
import axios from "./axios.js";
import { Link } from "react-router-dom";

//Components
import SubmitButton from "./submit-button.js";

export default class AdminRegistration extends React.Component {
    constructor() {
        super();
        this.state = {};
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        console.log("ADMIN COMPONENT");
    }

    handleChange(e) {
        this[e.target.name] = e.target.value;
    }

    submit() {
        axios
            .post("admin/register", {
                firstName: this.firstName,
                lastName: this.lastName,
                email: this.email,
                password: this.password
            })
            .then(({ data }) => {
                if (data.success) {
                    location.replace("/admin/dashbord");
                } else {
                    this.setState({
                        error: true
                    });
                }
            });
    }

    render() {
        const { error } = this.state;
        return (
            <div className="admin-registration-container">
                {error && (
                    <div className="input-error">
                        Something went wrong. Please try again.
                    </div>
                )}
                <h1> ADMIN </h1>
                <div className="registration-input-container" />
                <input
                    placeholder="Name"
                    name="firstName"
                    onChange={this.handleChange}
                />
                <input
                    placeholder="Lastname"
                    name="lastName"
                    onChange={this.handleChange}
                />
                <input
                    placeholder="your@email.com"
                    name="email"
                    onChange={this.handleChange}
                />
                <input
                    placeholder="Password"
                    name="password"
                    onChange={this.handleChange}
                />
                <SubmitButton text="Register" submit={this.submit} />
            </div>
        );
    }
}
