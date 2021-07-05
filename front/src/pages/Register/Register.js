import React from 'react'
import TextField from '@material-ui/core/TextField';

export default function Register() {
    return (
        <div>
            <h1>Register</h1>
            <form>
                <TextField required id="standard-required" label="Name" />
                <TextField required id="standard-required" label="NickName" />
                <TextField required id="standard-required"  type="email" label="Email" />
                <TextField required id="standard-required"  type="password" label="Password" />
            </form>
        </div>
    )
}