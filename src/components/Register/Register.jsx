import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const Register = () => {
    const {createUser} = useContext(AuthContext);
    const handleRegister = (e) => {
        e.preventDefault();
        const userName = e.target.name.value;
        const userEmail = e.target.email.value;
        const userPassword = e.target.password.value;
        console.log(userName, userEmail, userPassword);
        createUser(userEmail, userPassword)
        // create user with email and password
        .then(result => {
            console.log(result.user);
        })
        .catch(error => {
            console.log(error);
        })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                    
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleRegister}>
                    <div className="card-body">
                        <fieldset className="fieldset">
                            <label className="fieldset-label">Name</label>
                            <input type="text" name="name" className="input" placeholder="Name" />
                            <label className="fieldset-label">Email</label>
                            <input type="email" name="email" className="input" placeholder="Email" />
                            <label className="fieldset-label">Password</label>
                            <input type="password" name="password" className="input" placeholder="Password" />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn btn-primary mt-4">Register</button>
                        </fieldset>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;