import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase.config";
import { useState } from "react";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";

const HeroRegister = () => {
    const [registerError, setRegisterError] = useState('');
    const [showPassword, setShowPassword] = useState(false);  
    // handle hero submit form
    const handleHeroLoginForm = e =>{
        e.preventDefault(); 
       const email = e.target.email.value;
       const password = e.target.password.value;

    // create new user 
    createUserWithEmailAndPassword(auth, email, password)
    .then(result =>{
        console.log(result.user)
    })
    .catch(error =>{
        console.error(error); 
        setRegisterError(error.message)
    })
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Register now!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div>


    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleHeroLoginForm} className="card-body">


        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>


        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
         <div className="relative">
         <input type={showPassword?'text' : "password"} name="password" placeholder="password" className="input input-bordered w-full" required />
         <span className="absolute top-4 right-2"  onClick={() => setShowPassword(!showPassword)}>{showPassword? <IoIosEye></IoIosEye>:<IoIosEyeOff></IoIosEyeOff>}</span>
         </div>
         <br />
        <div>
        <input type="checkbox" name="terms" id="terms" /> 
        <label className="ml-2" htmlFor="terms">Accept Our <a href="">terms and Condition</a></label>
        </div>
        <br />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Submit</button>
        </div>
      </form>
      {
        registerError && <p className="text-xs font-bold text-center p-2 text-red-700">{registerError}</p>
      }
    </div>
  </div>
</div>
    );
};

export default HeroRegister;