import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { login } from './Auth'
import "./form.css"


const Login = () => {
    const [ username, setUsername] = useState("");
    const [ password, setPassword] = useState("");
    const [ error , setError] = useState("");

    const handleSubmit = async (e) =>{
        e.preventDefault ();
        console.log('username :',username);
        console.log('password :',password);

        try {
            const token = await login(username,password);
            console.log('login successful, token :',token);
            alert('login successfully');
            setError("");
        } catch (err) {
            console.error('login error:',err);
            setError('login faild');
        }
    };
  return (
    <div className='form-background'>
        <div className='row'>
            <div className='col-md-4'></div>
            <div className='col-md-4'>
                <div className='form-valedaiton card'>
                    <h1 className='heading-for-form'>Login</h1>
                <div class="card-body">
                    <form onSubmit={handleSubmit}>
                        <div class="mb-3">
                            <label for="exampleInputUserName"className='form-label'>User Name</label>
                            <input 
                            type='text'
                            name='username'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                             className='form-control' 
                             id='exampleInputUserName'/>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Password</label>
                            <input 
                            type="password"
                            name='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            class="form-control" 
                            id="exampleInputPassword1"/>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                        {error && <p style={{ color: 'red'}}>{error}</p>}
                        <Link to='/Register'><button type="submit" class="btn btn-primary">Register</button></Link>
                    </form>
                    </div>
                </div>
            </div>
            <div className='col-md-4'></div>
        </div>
    </div>
  )
}

export default Login