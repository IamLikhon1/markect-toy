import { Link, useLocation, useNavigate } from "react-router-dom";
import {  FaGoogle } from 'react-icons/fa';
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-hot-toast";

const Login = () => {
    const {userLogIn,googleLogin}=useContext(AuthContext)
    const navigate=useNavigate()
    const location=useLocation()
    const from=location.state?.from?.pathname||'/';

    const handleLogin=(event)=>{
        event.preventDefault();
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;

       
        userLogIn(email,password).then(result=>{
            const logIn=result.user;
            console.log(logIn)
            navigate(from,{replace:true})
            toast.success('You Successfully Login')
        })
        .catch(error=>{
            console.log(error)
        })
        form.reset()
    };

    const signInGoogle=()=>{
        googleLogin()
        .then(result=>{
            console.log(result.user)
            navigate(from,{replace:true})
        })
        .catch(error=>console.log(error))
    }


    return (
        <div className="grid md:grid-cols-2 p-10">
            <img src="https://img.freepik.com/free-vector/sign-page-abstract-concept-illustration_335657-3875.jpg?w=740&t=st=1684346908~exp=1684347508~hmac=d5c652d062237ff7a52f45c2566b117a727dd8bb10b8586363fe11238b99b3ee" alt="" />
            <div className="w-full">
            <div className="hero min-h-screen">
  <div className="hero-content flex-col">
    <div className="text-center lg:text-left">
      <h1 className="text-4xl font-bold text-orange-500">Login</h1>
    </div>
    <div className="card  w-96 shadow-2xl ">
      <div className="card-body  w-96">
        <form onSubmit={handleLogin}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name="password" className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <button type="submit" className="btn btn-accent">Login</button>

          <button onClick={signInGoogle} className="btn btn-outline btn-primary mt-3"><FaGoogle className="text-black mr-3"></FaGoogle> Sign In Google</button>
          
          <p className="mt-5 text-center font-semibold"><small>New to Toys Cars World? <Link to='/register'><span className="text-orange-500 text-lg">Register</span></Link></small></p>
        </div>
        </form>
      </div>
    </div>
  </div>
</div>
            </div>
        </div>
    );
};

export default Login;