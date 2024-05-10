import { Link } from "react-router-dom";


const SignUp = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
    <div className="text-center">
            <h1 className="text-3xl font-bold">Create Account</h1>
          </div>
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="Your Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Image</span>
          </label>
          <input type="url" placeholder="Photo Url" className="input input-bordered" required />
        </div>
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
          <button className="btn btn-primary">SignUp</button>
        </div>
      </form>
      <p className="mx-auto">You Have An account Please <Link to="/signIn" className="hover:underline text-blue-500">SignIn</Link></p>
    </div>
</div>
    );
};

export default SignUp;