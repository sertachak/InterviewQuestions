import React from "react";
import { render } from "react-dom";
import { TransitionMotion, spring } from "react-motion";
import "./TextInputBar.css";

class Input extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: (props.locked && props.active) || false,
      value: props.value || "",
      error: props.error || "",
      label: props.label || "Label"
    };
  }

  changeValue(event) {
    const value = event.target.value;
    this.setState({ value, error: "" });
  }

  handleKeyPress(event) {
    if (event.which === 13) {
      this.setState({ value: this.props.predicted });
    }
  }

  render() {
    const { active, value, error, label } = this.state;
    const { predicted, locked } = this.props;
    const fieldClassName = `field ${(locked ? active : active || value) &&
      "active"} ${locked && !active && "locked"}`;

    return (
      <div className={fieldClassName}>
       <form >
                <input style={{width:"94.9%"}}
                    placeholder={label}
                    type="text"
                    value={this.props.message}
                    onChange={(event) =>{
                    this.props.setMessage(event.target.value);
                    this.changeValue.bind(this)} 
                    }
                    onKeyPress={(event) => { 
                    this.handleKeyPress.bind(this);
                    return event.key === 'Enter' ? this.props.sendMessage(event) : null 
                    }}
                    onFocus={() =>  this.setState({ active: true })}
                    onBlur={() =>  this.setState({ active: false })}
                />
                <button className="myButton" onClick={(event) =>{
                  this.props.sendMessage(event)
                  this.props.setMessage("")
                }}>Send</button>
            </form>
           
      </div>
    );
  }
}

export default Input;

