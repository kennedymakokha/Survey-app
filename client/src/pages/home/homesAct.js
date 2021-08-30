import React, { useEffect, useState } from 'react';
import io from 'socket.io-client'
const socket = io('http://localhost:8000/')
const Home = () => {

    const [email, setEmail] = useState('');

    const [other, setOther] = useState({ Pas: "password", Email: "email" });
    const [password, setpassword] = useState('');

    const submit = () => {

        try {
            const data = { Pas: password, Email: email }

            socket.emit('sent-response', data)
            socket.on("response", (response) => {
                console.log('respones' + response)
                setOther(response)

            })

        } catch (error) {
            alert(error)
        }

    }
    useEffect(() => {

    }, [])
    return (
        <div className="container">
            <div className="row">
                <h1 className="text-center">Home Page</h1>

                <div className="row g-3">
                    <div className="col-auto">
                        <label className="visually-hidden">Email</label>
                        <input type="text" className="form-control-plaintext" id="staticEmail2" onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="col-auto">
                        <label className="visually-hidden">Password</label>
                        <input type="password" className="form-control" id="inputPassword2" onChange={(e) => setpassword(e.target.value)} placeholder="Password" />
                    </div>
                    <div className="col-auto">
                        <button type="submit" onClick={() => submit()} className="btn btn-primary mb-3">Confirm identity</button>
                    </div>
                </div>
                <p>{other.Email}</p>
            </div>

        </div>
    );
}


export default Home;