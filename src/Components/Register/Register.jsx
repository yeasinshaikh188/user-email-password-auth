import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase.config";
import { useState } from "react";

const Register = () => {
    const [register, setRegister] = useState('');
    // handle submit form
    const handleRegister = e =>{
        e.preventDefault(); 
        const email = e.target.email.value;
        const password = e.target.password.value; 

        // create new user 
        createUserWithEmailAndPassword(auth, email, password)
        .then(result =>{
            console.log(result.user); 
        })
        .catch(error =>{
            console.error(error); 
            setRegister(error.message); 
        })
    }

    return (
        <>
            <h1 className="text-center text-4xl font-bold">Please Register</h1>

            <form onSubmit={handleRegister} className="text-center p-9 space-y-3">
                <input className="text-xl font-bold bg-gray-300 border-none outline-none rounded p-2" type="email" name="email" placeholder="Email Addrss" id="" />
                <br />
                <input className="text-xl font-bold bg-gray-300 border-none outline-none rounded p-2" type="password" placeholder="password" name="password" id="" />
                <br />
                <input className="text-xl font-bold bg-orange-500 border-none outline-none rounded p-2 cursor-pointer text-white" type="submit" value="Register" />
            </form>
             {
                register && <p className="text-xs text-center font-bold text-red-700">{register}</p>
             }
        </>
    );
};

export default Register;