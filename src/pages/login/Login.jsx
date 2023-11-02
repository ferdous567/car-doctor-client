import { Link, useLocation, useNavigate } from 'react-router-dom';
import login from '../../assets/images/login/login.svg';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import axios from 'axios';


const Login = () => {

    const {signInUser} = useContext(AuthContext);
    const location = useLocation();
    // console.log(location);
    const navigate = useNavigate();


    const handleSignIn = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(newUser)

        signInUser(email, password)
        .then(result => {
            console.log(result.user);
            const user = { email };
            
            // get access token
           axios.post('http://localhost:5000/jwt', user, {withCredentials: true})
           .then(res =>{
            console.log(res.data)
            if(res.data.success){
                navigate(location?.state ? location?.state : '/')
            }
           })

        })
        .catch(error => {
            console.error(error)
        })
        form.reset();
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                <img className='h-[400px] ' src={login} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSignIn} className="card-body">
                        <h2 className='text-2xl font-bold'>Login Here</h2>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <p>New here? Please <Link className='text-blue-600 font-bold hover:underline' to = '/register'>Register</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;