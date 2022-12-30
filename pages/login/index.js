/* This example requires Tailwind CSS v2.0+ */
import { useState } from 'react'
import InputField from '../component/formsy/input';
import { Button } from '../component/button';
import {FcGoogle} from "react-icons/fc"
import {MdOutlineAlternateEmail} from "react-icons/md"
import {RiLockPasswordLine} from "react-icons/ri"
import {GrUserAdmin} from "react-icons/gr"
import Formsy from 'formsy-react';
import { getCurrentUser, login } from '../../logic/user';
import { useRouter } from 'next/router';
import { Alert } from '../component/alert';

export default function Index() {
  const router = useRouter();
  const [canSubmit, setCanSubmit] = useState(false);
  const [loading, setLoading] = useState(false);

  const [errorMessage, setErrorMessage] = useState(null);

  const user = getCurrentUser();

  const handleSubmit = async (model) => {
    setLoading(true);
    try {
      
      await login("http://localhost:7080/rest.api/login", model);
      const response = await fetch("http://localhost:7080/rest.api/test", {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'include', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      });
      console.log(response.json()); // parses JSON response into native JavaScript objects
      setErrorMessage(null);
      console.log(user)
      // router.push("/portal");
    } catch (error) {
      console.log(error)
      setErrorMessage("Invalid usename or password.");
    }
    setLoading(false);
  }
  return (
    <div className="flex h-screen">
      <div className="w-full bg-primary bg-cover grow bg-[url('/static/bg_1.svg')]" />
      <div className="flex items-center justify-center p-32 md:p-32 lg:p-32 w-full lg:w-auto">
          <div className="w-96">
            <div className="flex items-center justify-center w-full p-8 text-gray-darker"><GrUserAdmin size={70}/></div>
            <h1 className="text-center text-3xl tracking-tight font-normal text-gray-darker pb-5 sm:text-4xl md:text-4xl">
              <span className="block inline">Welcome back!</span>
              <p className="text-xs pt-2 text-gray-placeholder">Welcome back! please enter your details</p>
            </h1>
            <Formsy onValidSubmit={handleSubmit}
            onValid={()=>setCanSubmit(true)} 
            onInvalid={()=>setCanSubmit(false)}
            >
            
            {errorMessage && 
              <div className="py-3">
                <Alert type="error" title="Error" message={errorMessage}/>
              </div>
              
            }
            <InputField 
                // validations="isEmail" validationError="Please enter a valid email." 
                required
                name="username"
                label="Email"
                placeholder="Enter your email or username."
                icon={<MdOutlineAlternateEmail/>}
              />
            <InputField 
                required
                name="password"
                label="Password"
                type="password"
                placeholder="Enter your password."
                icon={<RiLockPasswordLine/>}
              />
              <Button label="Login" disabled={!canSubmit} type="submit" onClick={()=>console.log("Login")}/>
              <Button label="Sign in with Google" variant="default" icon={<FcGoogle/>}/>
            </Formsy>
              <div className="pt-20 text-center">
                <p className="text-xs pt-2 text-gray-placeholder">Powered by <strong>JCC Solution</strong></p>
              </div>
          </div>
        </div>
    </div>
  )
}