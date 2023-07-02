
import React, { useState } from 'react';


const InputField = (props) => {
    // An error message is passed only if the component is invalid
    const errorMessage = props.errorMessage;
    const {name, icon, label,type, onClick, register, required, pattern} = props;
    // const [inputValue, setInputValue] = useState(null);
    return (
      <div className="relative">
      {label && (<label className="block text-gray-lighter text-xs font-bold mb-2" htmlFor={name}>
        {label}
      </label>)}
      <div className="flex flex-row items-center justify-center">
        <input className={`h-[2.65rem] pl-3 grow shadow appearance-none border-none rounded-lg ${icon? "rounded-r-none" : ""} text-gray-darker leading-tight  focus:shadow-outline`} 
         {...props}
        {...register ? register(name, {required, pattern}) : {}}
        />
        {icon && <div className="flex items-center justify-center h-[2.65rem] w-[2.6rem] shadow appearance-none border-none rounded-lg rounded-l-none text-gray-darker leading-tight  focus:shadow-outline ">{icon}</div>}
      </div>
      <span className={`text-danger tonChange={e => setMessage(e.target.value)}ext-xs ${errorMessage? "visible": "invisible"}`}>{errorMessage}</span>
    </div>
    );

}


export default InputField;