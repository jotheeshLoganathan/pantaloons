import React, { useState } from 'react'
import"./form.css"
import { register } from './Auth';
import { Form, Link } from 'react-router-dom';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try{
            await register(username,email,password);
            setSuccess('registration successful! you can now log in');
            setError('');
            setUsername ('');
            setEmail('');
            setPassword('');
            // Form.resert();
            // window.location.href='/LoginForm'
        } catch(err) {
            console.error('Registration error :',err);
            setError('Regitration failed');
            setSuccess('');
        }
    };

    // const [formData, setFormData] = useState({
    //     username: '',
    //     email: '',
    //     password: ''
    // });
    // const [Errors, setErrors] = useState({});

    // const validate =() =>{
    //     const NewErrors = {};
    //     if (!formData.username) NewErrors.username = 'Username is required';
    //     if (!formData.email) NewErrors.email = 'Email is required';
    //     else if (!/\S+@\S+\.\S+/.test(formData.email)) NewErrors.email = 'Email is invalid';

    //     if (!formData.password) NewErrors.password = 'Password is required';
    //     else if(formData.password.length < 8) NewErrors.password = 'Password must be at least 8 chateres';
    //     else if (!/[a-z]/.test(formData.password)) NewErrors.password = 'Password must contain at least one lowercase';
    //     else if (!/[A-Z]/.test(formData.password)) NewErrors.password = 'Password must contain at least one uppercase';
    //     else if (!/[!@#$%^&*(){},.?><"]/.test(formData.password)) NewErrors.password = 'Password must contain at least one special characters';

    //     return NewErrors;
    // };
    // const handelChange = (e) =>{
    //     const { name, value } = e.target;
    //     setFormData({
    //         ...formData,
    //         [name]: value
    //     });
    // };

    // const handleSubmit = (e) =>{
    //     e.preventDefault ();
    //     const valedaitonErrors = validate();
    //     if (Object.keys(valedaitonErrors).length === 0) {
    //         console.log('form data is valid:', formData);

    //         setFormData({
    //             username:'',
    //             email:'',
    //             password:''
    //         });
    //         setErrors({});
    //     } else {
    //         setErrors(valedaitonErrors);
    //     }
    // };
  return (
    <div className='form-background'>
        <div className='row'>
            <div className='col-md-4'></div>
            <div className='col-md-4'>
                <div className='form-valedaiton card'>
                    <h1 className='heading-for-form'>Register</h1>
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
                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                            <input 
                            type="email"
                            name='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} 
                            class="form-control" 
                            id="exampleInputEmail1" 
                            aria-describedby="emailHelp"/>
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
                        <Link to='/LoginForm'>
                        <button type="submit" class="btn btn-primary">Submit</button>
                        </Link>
                        {error && <p style = {{ color:'red'}}>{error}</p>}
                        {success && <p style = {{ color:'green'}}>{success}</p>}
                    </form>
                    </div>
                </div>
            </div>
            <div className='col-md-4'></div>
        </div>
    </div>

  )
}

export default LoginForm