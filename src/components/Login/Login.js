import React from "react";
import './Login.css';
import {Button} from "@material-ui/core";

const Login = () => {
    const signIn = () => {

    };

    return (
        <div className="login">
            <div className="login-logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/120px-Facebook_f_logo_%282019%29.svg.png" alt="Login"/>
                <h1>Facebook</h1>
            </div>
            <Button type={"submit"} onClick={signIn}>
                Sign In
            </Button>
        </div>
    )
};

export default Login;