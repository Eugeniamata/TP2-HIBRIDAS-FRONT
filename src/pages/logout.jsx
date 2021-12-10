import { useState } from 'react'

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { FormGroup, Container, Box } from '@mui/material';



function Logout({ onLogout }) {
    const [email, setEMail] = useState("")
    const [password, setPassword] = useState("")

    function onSubmit(e) {
        e.preventDefault()

        fetch('http://localhost:9001/user/login', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })
            .then(function (response) {
                return response.json()
            })
            .then(function (data) {
                //alert("Tu Token: "+data.token)
                localStorage.setItem('token', data.token)
                onLogout()
            })
            .catch(function (err) {
                alert(JSON.stringify(err))
            })


        console.log(email, password)
    }

    return (
        <Container maxWidth="sm">
            <Box>
                <FormGroup>
                    <TextField label="E-Mail" value={null} onChange={(e) => { setEMail(e.target.value) }} />
                </FormGroup>
                <FormGroup>
                    <TextField label="Password" type="password" value={null} onChange={(e) => { setPassword(e.target.value) }} />
                </FormGroup>

                <Button variant="outlined" onClick={(e) => onSubmit(e)}>Salir</Button>
            </Box>
        </Container>
    )
}

export default Logout