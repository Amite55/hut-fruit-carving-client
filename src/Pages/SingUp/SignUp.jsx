import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAuth from "../../customHooks/useAuth";
import { motion } from "framer-motion"

const SignUp = () => {
  const navigate = useNavigate();
  const location = useLocation();
 const from = location?.state || '/';

  const { createUser, updateUserProfile } = useAuth()
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    const {email, password, name, image} = data;
    console.log(data);
    try{
    await createUser(email, password);
    await updateUserProfile(name, image)
     Swal.fire({
      title: "Welcome",
      text: "You account Registered",
      icon: "success"
    });
    navigate(from)
   }catch(err) {
        Swal.fire({
          title: "oh😫!",
          text: "Please try again",
          icon: "error"
        })
      }
  }

  return (
    <motion.div 
    initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 2 } }} 
    className="hero min-h-screen bg-base-200">
      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Create Account</h1>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="card-body"
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text">Full Name</span>
            </label>
            <input type="text"
              placeholder="Full Name"
              className="input input-bordered"
              {...register("name", { required: true })}
            />
            {
              errors.fullName && <span className="text-red-500">This field is required</span>
            }
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Image</span>
            </label>
            <input type="url"
              placeholder="Photo Url"
              className="input input-bordered"
              {...register("image")}
            />
            {
              errors.image && <span className="text-red-500">This field is required</span>
            }
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email"
              placeholder="email"
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
            <input type="password"
              placeholder="*********"
              className="input input-bordered"
              required
              {...register("password", { pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/})}
            />
            {
              errors.password && <span className="text-red-500">Please uniq password</span>
            }
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">Forgot password?</a>

              <select>
                <option value="female">female</option>
                <option value="male">male</option>
                <option value="other">other</option>
              </select>

            </label>
          </div>

          <div className="form-control mt-6">
            <button className="btn btn-primary">SignUp</button>
          </div>
        </form>
        <p className="mx-auto">You Have An account Please <Link to="/signIn" className="hover:underline text-blue-500">SignIn</Link></p>
      </div>
    </motion.div>
  );
};

export default SignUp;