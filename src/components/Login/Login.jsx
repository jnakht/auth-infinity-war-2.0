import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";


const Login = () => {
    const {userLoginWithPassword} = useContext(AuthContext);
    const navigate = useNavigate();
    const handleLogin = (e) => {
        e.preventDefault();
        
        const userEmail = e.target.email.value;
        const userPassword = e.target.password.value;
        console.log(userEmail, userPassword);

        // login  with email and password
        userLoginWithPassword(userEmail, userPassword)
        .then(result => {
            console.log(result.user);
            // reset the form
            e.target.reset();
            // navigate to home page
            navigate('/');
        })
        .catch(error => {
            console.log(error)
        })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleLogin}>
                    <div className="card-body">
                        <fieldset className="fieldset">
                            <label className="fieldset-label">Email</label>
                            <input type="email" name="email" className="input" placeholder="Email" />
                            <label className="fieldset-label">Password</label>
                            <input type="password" name="password" className="input" placeholder="Password" />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn btn-primary mt-4">Login</button>
                        </fieldset>
                    </div>
                    </form>
                    <p>New Here? Please <Link className="text-primary text-bold text-xl " to='/register'>Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;