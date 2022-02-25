import { useState } from 'react';
import AddMember from './AddMember'
const axios = require('axios');

const Dashboard = () => {

    const [user, setUser] = useState(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState('');



    const api = "https://uniontracking-3.frogi.dev/api/login";

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post(api, {
            email: email,
            password: password
        })
            .then((data) => { alert(data.data.message); setUser(data.data.data); setToken(data.data.data.token) })
            .catch(err => console.log(err));
    }





    return (
        <div className='dashboard container'>
            <form onSubmit={handleSubmit}>
                <div className="mb-5">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                </div>
                <div className=" mb-5">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>

            </form>
            {user ? <AddMember /> : <></>}
        </div>
    )
}

export default Dashboard