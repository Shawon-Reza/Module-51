import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import { useContext } from "react";
import {AuthContext} from './AuthProvider/AuthProvider'

const Resister = () => {

 const {createUser}=useContext(AuthContext)

    const  handleRegister   = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const pass = e.target.pass.value
        const name = e.target.name.value
        console.log(name,email, pass);
        
      
        
        createUser(email,pass)
        .then((res)=>{console.log(res)})
        .catch((err)=>{console.log("Error :",err);})


    }





    return (
        <div>
            {/* <Navbar></Navbar> */}
            <div className="hero bg-base-200 min-h-screen">

                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form
                        onSubmit={handleRegister}
                        className="card-body"
                    >
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text"
                                placeholder="Name"
                                className="input input-bordered"
                                name="name"
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email"
                                placeholder="email"
                                className="input input-bordered"
                                name="email"
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>

                            <input type="password" placeholder="password"
                                className="input input-bordered"
                                name="pass"
                            />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button
                                className="btn btn-primary"
                            >Register</button>
                        </div>
                    </form>

                    <NavLink to="/login" className={"text-center text-red-500 underline pb-2"} >Login</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Resister;