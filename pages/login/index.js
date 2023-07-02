/* This example requires Tailwind CSS v2.0+ */
import {Fragment, useState } from 'react'
import InputField from '../component/react-hook-form/input';
import { Button } from '../component/button';
import {FcGoogle} from "react-icons/fc"
import {MdOutlineAlternateEmail} from "react-icons/md"
import {RiLockPasswordLine} from "react-icons/ri"
import {GrUserAdmin} from "react-icons/gr"
import Formsy from 'formsy-react';
import { getCurrentUser, login } from '../../logic/user';
import { Alert } from '../component/alert';
import { useForm } from 'react-hook-form';

export default function Index (props) {
  const [canSubmit, setCanSubmit] = useState(false);

  const handleLogin = async (model) => {
    try {
      await login("http://localhost:7080/rest.api/login", model);
      setErrorMessage(null);
      window.location = "/portal"
    } catch (error) {
      console.log(error)
      setErrorMessage("Invalid usename or password.");
    }
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [errorMessage, setErrorMessage] = useState(null);
  const {data, loading } = getCurrentUser();
  if (loading) {
    return <></>
  } else {
    if (data) {
      window.location = "/portal"
    } else {
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
                <form onSubmit={handleSubmit(handleLogin)}
                onValid={()=>setCanSubmit(true)} 
                onInvalid={()=>setCanSubmit(false)}
                >
                
                {errorMessage && 
                  <div className="py-3">
                    <Alert type="error" title="Error" message={errorMessage}/>
                  </div>
                  
                }
                
                <div className='mb-3'>
                  <InputField
                      required
                      register={register}
                      id="username"
                      name="username"
                      label="Email"
                      placeholder="Enter your email or username."
                      icon={<MdOutlineAlternateEmail/>}
                    />
                </div>
                <div className='mb-3'>
                <InputField 
                    required
                    register={register}
                    name="password"
                    label="Password"
                    type="password"
                    placeholder="Enter your password."
                    icon={<RiLockPasswordLine/>}
                  />
                </div>
                
                
                  {/* <Button label="Login" disabled={!canSubmit} type="submit" onClick={()=>console.log("Login")}/> */}
                  <Button label="Login" type="submit" onClick={()=>console.log("Login")}/>
                  <Button label="Sign in with Google" variant="default" icon={<FcGoogle/>}/>
                </form>
                  <div className="pt-20 text-center">
                    <p className="text-xs pt-2 text-gray-placeholder">Powered by <strong>JCC Solution</strong></p>
                  </div>
              </div>
          </div>
          
        </div>
      )
    }
  }

  
  
}
