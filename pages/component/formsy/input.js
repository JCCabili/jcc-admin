// export const InputField = (props) => {
//   return (
//     <div className="mb-4 relative">
//       {props.label && (<label className="block text-gray-lighter text-xs font-bold mb-2" for={props.name}>
//         {props.label}
//       </label>)}
//       <div className="flex items-center justify-center">
//         <input className={`py-3 px-3 grow shadow appearance-none border-none rounded-lg ${props.icon? "rounded-r-none" : ""} text-gray-darker leading-tight  focus:shadow-outline`} {...props}
//         id={props.name}/>
//         {props.icon && <div className="py-3 px-3 shadow appearance-none border-none rounded-lg rounded-l-none text-gray-darker leading-tight  focus:shadow-outline ">{props.icon}</div>}
//       </div>
//     </div>
//   )
// }

import { withFormsy } from 'formsy-react';
import React from 'react';

class InputField extends React.Component {
  constructor(props) {
    super(props);
    this.changeValue = this.changeValue.bind(this);
  }

  changeValue(event) {
    // setValue() will set the value of the component, which in
    // turn will validate it and the rest of the form
    // Important: Don't skip this step. This pattern is required
    // for Formsy to work.
    this.props.setValue(event.currentTarget.value);
  }

  render() {
    // An error message is passed only if the component is invalid
    const errorMessage = this.props.errorMessage;
    const {name, icon, label,type} = this.props;

    return (
      <div className="mb-4 relative">
      {label && (<label className="block text-gray-lighter text-xs font-bold mb-2" for={name}>
        {label}
      </label>)}
      <div className="flex items-center justify-center">
        <input className={`py-3 px-3 grow shadow appearance-none border-none rounded-lg ${icon? "rounded-r-none" : ""} text-gray-darker leading-tight  focus:shadow-outline`} 
        {...this.props}
        onChange={this.changeValue} value={this.props.value || ''}
        />
        {icon && <div className="py-3 px-3 shadow appearance-none border-none rounded-lg rounded-l-none text-gray-darker leading-tight  focus:shadow-outline ">{icon}</div>}
      </div>
      <span className="text-danger text-xs">{errorMessage}</span>
    </div>
    );
  }
}

export default withFormsy(InputField);