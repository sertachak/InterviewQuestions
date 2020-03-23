import React from "react";
import { render } from "react-dom";
import { TransitionMotion, spring } from "react-motion";
import "./TextInputBar.css";

class Input extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message:props.message,
      setMessage:props.setMessage,
      sendMessage:props.sendMessage,  
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
       <form className={fieldClassName}>
                <input
                    placeholder="Type a message to send..."
                    type="text"
                    value={this.state.message}
                    onChange={(event) => this.state.setMessage(event.target.value)}
                    onKeyPress={(event) => { return event.key === 'Enter' ? this.state.sendMessage(event) : null }}
                    onFocus={() => this.setState({active:true})}
                    onBlur={() => this.state.setState({active:true})}
                />
                <button onClick={(event) => this.state.sendMessage(event)}>Send</button>
            </form>
        <label htmlFor={1} className={error && "error"}>
          {error || label}
        </label>
      </div>
    );
  }
}

export default Input;

