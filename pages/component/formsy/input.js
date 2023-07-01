

import { withFormsy } from 'formsy-react';
import React, { useState } from 'react';

// class InputField extends React.Component {
//   constructor(props) {
//     super(props);
//     this.changeValue = this.changeValue.bind(this);
//   }

//   changeValue(event) {
//     // setValue() will set the value of the component, which in
//     // turn will validate it and the rest of the form
//     // Important: Don't skip this step. This pattern is required
//     // for Formsy to work.
//     this.props.setValue(event.currentTarget.value);
//   }

//   render() {
//     // An error message is passed only if the component is invalid
//     const errorMessage = this.props.errorMessage;
//     const {name, icon, label,type, onClick} = this.props;

//     return (
//       <div className="relative">
//       {label && (<label className="block text-gray-lighter text-xs font-bold mb-2" for={name}>
//         {label}
//       </label>)}
//       <div className="flex flex-row items-center justify-center">
//         <input className={`h-[2.65rem] pl-3 grow shadow appearance-none border-none rounded-lg ${icon? "rounded-r-none" : ""} text-gray-darker leading-tight  focus:shadow-outline`} 
//         {...this.props}
//         onChange={this.changeValue} value={this.props.value || ''}
//         />
//         {icon && <div className="flex items-center justify-center h-[2.65rem] w-[2.6rem] shadow appearance-none border-none rounded-lg rounded-l-none text-gray-darker leading-tight  focus:shadow-outline ">{icon}</div>}
//       </div>
//       <span className={`text-danger text-xs ${errorMessage? "visible": "invisible"}`}>{errorMessage}</span>
//     </div>
//     );
//   }
// }

const InputField = (props) => {
    // An error message is passed only if the component is invalid
    const errorMessage = props.errorMessage;
    const {name, icon, label,type, onClick} = props;
    // const [inputValue, setInputValue] = useState(null);



    return (
      <div className="relative">
      {label && (<label className="block text-gray-lighter text-xs font-bold mb-2" htmlFor={name}>
        {label}
      </label>)}
      <div className="flex flex-row items-center justify-center">
        <input className={`h-[2.65rem] pl-3 grow shadow appearance-none border-none rounded-lg ${icon? "rounded-r-none" : ""} text-gray-darker leading-tight  focus:shadow-outline`} 
         {...props}
        // onChange={onChange} value={value}
       
        />
        {icon && <div className="flex items-center justify-center h-[2.65rem] w-[2.6rem] shadow appearance-none border-none rounded-lg rounded-l-none text-gray-darker leading-tight  focus:shadow-outline ">{icon}</div>}
      </div>
      <span className={`text-danger tonChange={e => setMessage(e.target.value)}ext-xs ${errorMessage? "visible": "invisible"}`}>{errorMessage}</span>
    </div>
    );

}


export default withFormsy(InputField);