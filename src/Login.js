import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { perFormLogin, perFormLogout } from './actions'
import { Button, InputLabel, Input, Box } from '@material-ui/core';

export const LoginPage = props => {

    let [showError, setShowError] = useState(false)

    const dispatch = useDispatch();

    const login = (e) => {
        e.preventDefault();

        if (e.target.username.value === "login" && e.target.password.value === "123") {
            setShowError(false)
            dispatch(perFormLogin())
            props.history.push("/app")
        }
        else {
            e.target.username.value = ""
            e.target.password.value = ""
            setShowError(true)
        }


    }

    return (
        <div>
            <h1 style={{textAlign:"center"}}>React Task</h1>
            <div style={{ display: "flex", justifyContent: "center", height: "90vh" , marginTop:"60px"}}>
                <form onSubmit={login}>
                    <InputLabel >Name</InputLabel>
                    <Input type="text" className="form-control" name="username"
                        required />
                    <InputLabel htmlFor="exampleInputPassword1" style={{ marginTop: "10px" }}>Password</InputLabel>
                    <Input type="password" className="form-control" name="password"
                        required />
                    <br />

                    <Button type="submit">Login</Button>
                    <Box component="span" style={{ color: "red" , display: `${showError ? "block" : "none"}` }}>
                        Wrong Credentials
                    </Box>
                </form>



            </div>
        </div>
        


    );
};

export default LoginPage;