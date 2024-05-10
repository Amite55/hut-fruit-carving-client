import { Link } from "react-router-dom";
import {  FaGithub, FaGoogle } from "react-icons/fa6";

const SingIn = () => {
  return (
    <div>


      <div className="hero min-h-screen bg-base-200">
       
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="text-center">
            <h1 className="text-3xl font-bold">Please Log In</h1>
          </div>
          <div className="mt-6 flex justify-center gap-3">
          <button className="btn"><FaGoogle />Google</button>
          <button className="btn"><FaGithub />Github</button>
        </div>
        <p className="mx-auto mt-4">Or</p>
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" placeholder="*********" className="input input-bordered" required />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <p className="mx-auto">New Member? <Link className="hover:underline text-blue-500" to="/signUp">Register</Link> Hare!</p>
        </div>

      </div>
    </div>
  );
};

export default SingIn;