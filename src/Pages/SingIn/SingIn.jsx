import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGithub, FaGoogle } from "react-icons/fa6";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { motion } from "framer-motion"

const SingIn = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const form = location?.state || '/';

  const {singInUser, googleLogIn, githubLogIn} = useContext(AuthContext);

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    const {email, password} = data;
    singInUser(email, password)
    .then(result => {
      console.log(result.user);
      navigate(form);
      if(result.user){
        Swal.fire({
          title: "Welcome",
          text: "You account Registered",
          icon: "success"
        });
      }
    })
    .catch(error => {
      console.error(error);
      if(error.message){
        Swal.fire({
          title: "oh😫!",
          text: "Please try again",
          icon: "error"
        })
      }
    })
  }
  
  const handleSocialLogin = (socialProvider) => {
    socialProvider()
    .then(result => {
      console.log(result.user);
      navigate(form)
    })
  }

  return (
    <motion.div 
    initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 2 } }}
    >
      <div className="hero min-h-screen bg-base-200">
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="text-center">
            <h1 className="text-3xl font-bold">Please Log In</h1>
          </div>

          <div className="mt-6 flex justify-center gap-3">
            <button 
            onClick={() => handleSocialLogin(googleLogIn)}
            className="btn"><FaGoogle />Google</button>
            <button 
            onClick={() => handleSocialLogin(githubLogIn)}
            className="btn"><FaGithub />Github</button>
          </div>

         <div className="divider text-center items-center mt-4">
         <p className=" mx-auto ">Or</p>
         </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email" placeholder="email"
                className="input input-bordered"
                {...register("email", { required: true })}
              />
              {
                errors.email && <span className="text-red-500">This field is required</span>
              }
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="*********"
                className="input input-bordered"
                {...register("password", { required: true })}
              />
              {
                errors.password && <span className="text-red-500">This field is required</span>
              }
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
    </motion.div >
  );
};

export default SingIn;