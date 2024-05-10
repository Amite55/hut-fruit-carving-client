import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";


const SignUp = () => {

  const { createUser } = useContext(AuthContext);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    const {email, password} = data;
    createUser(email, password)
    .then(result => {
      console.log(result);
      if(result.user){
        Swal.fire({
          title: "Welcome",
          text: "You account Registered",
          icon: "success"
        });
      }
    })
    .catch(error => {
      console.error(error.message)
      if(error.message){
        Swal.fire({
          title: "oh😫!",
          text: "Please try again",
          icon: "error"
        })
      }

    })
  }

  return (
    <div className="hero min-h-screen bg-base-200">
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
              {...register("fullName", { required: true })}
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
    </div>
  );
};

export default SignUp;