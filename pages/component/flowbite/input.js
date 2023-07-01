

import { Label, TextInput } from 'flowbite-react';
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
    const {id, label, rightIcon} = this.props;

    return (
      <div>
        <div className="mb-2 block">
          {label && <Label
            htmlFor={id}
            value={label}
          />}
        </div>
        <TextInput
          rightIcon={rightIcon}
          onChange={this.changeValue} value={this.props.value || ''}
          {...this.props}
          helperText={()=>{
            return erroMessage ? <span className={`text-danger text-xs ${errorMessage? "visible": "invisible"}`}>{errorMessage}</span> : undefined
          }}
        />
      </div>
    );
  }
}

export default withFormsy(InputField);