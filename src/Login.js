import React , { useState } from 'react';
import axios from 'axios';

const baseURL = "http://localhost:8000/api/login_check";

function Login() {
    const [data, setData] = useState({
        username: "",
        password: ""
      });

    const handleChange = (e) => {
        const value = e.target.value;
        setData({
            ...data,
            [e.target.name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(baseURL,
            {
                "username":data.username,
                "password":data.password
            }
          ).then((response) => {
          console.log(response.token);
        }).catch(error => console.log(error));
    };

    return (
        <div className="login-container">
            <div class="account section">
                <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-6">
                    <div class="login-form border p-5">
                        <div class="text-center heading">
                        <h2 class="mb-2">Login</h2>
                        <p class="lead">Don’t have an account? <a href="#">Create a free account</a></p>
                        </div>
            
                        <form action="#" onSubmit={handleSubmit}>
                        <div class="form-group mb-4">
                            <label for="#">Username</label>
                            <input type="text" name="username" class="form-control" placeholder="Enter Username" value={data.username} onChange={handleChange}/>
                        </div>
                        <div class="form-group">
                            <label for="#">Password</label>
                            <a class="float-right" href="">Forget password?</a>
                            <input type="password" name="password" class="form-control" placeholder="Enter Password" value={data.password} onChange={handleChange}/> 
                        </div>
            
                        <a href="#" class="btn btn-main mt-3 btn-block" type="submit" onClick={handleSubmit}>Login</a>
                        </form>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}
export default Login