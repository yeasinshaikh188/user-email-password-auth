import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase.config";
import { useState } from "react";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";

const Register = () => {
    const [register, setRegister] = useState('');
    const [succes, setSucces] = useState('');
    const [showPassword, setShowPassword] = useState(false); 
    // handle submit form
    const handleRegister = e =>{
        e.preventDefault(); 
        const email = e.target.email.value;
        const password = e.target.password.value;
        const accepted = e.target.terms.checked; 
        
        if(password.length <6){
            setRegister('Password should be at least 6 characters or longer'); 
            return; 
        } else if (!/[A-Z]/.test(password)){
            setRegister('Your password should have at least one uppercase');
            return; 
        }
        else if(!accepted){
            setRegister('Accept our terms and conditions'); 
            return; 
        }


        // reset error and succes
        setRegister('')
        setSucces('')

        // create new user 
        createUserWithEmailAndPassword(auth, email, password)
        .then(result =>{
            console.log(result.user);
            setSucces('User Created Succesfully'); 
        })
        .catch(error =>{
            console.error(error); 
            setRegister(error.message); 
        })
    }

    return (
        <>
            <h1 className="text-center text-4xl font-bold">Please Register</h1>

            <form onSubmit={handleRegister} className="text-center p-9 w-1/2 mx-auto space-y-3">
                <input className="text-xl w-full font-bold bg-gray-300 border-none outline-none rounded p-2" type="email" name="email" placeholder="Email Addrss" id="" required/>
                <br />
              <div className="relative">
              <input className="text-xl w-full font-bold bg-gray-300 border-none outline-none rounded p-2"
                 type={showPassword? "text" : "password"}
                 placeholder="password" 
                 name="password" id="" required/>
                 <span className="absolute top-4 right-2" onClick={() => setShowPassword(!showPassword)}>{showPassword ? <IoIosEye></IoIosEye> : <IoIosEyeOff></IoIosEyeOff> }</span>
              </div>
              <div>
        <input type="checkbox" name="terms" id="terms" /> 
        <label className="ml-2" htmlFor="terms">Accept Our <a href="">terms and Condition</a></label>
        </div>
                <input className="text-xl w-full font-bold bg-orange-500 border-none outline-none rounded p-2 cursor-pointer text-white" type="submit" value="Register" />
            </form>
             {
                register && <p className="text-xs text-center font-bold text-red-700">{register}</p>
             }
             {
                succes && <p className="text-xs text-center font-bold text-green-500">{succes}</p>
             }
        </>
    );
};

export default Register;