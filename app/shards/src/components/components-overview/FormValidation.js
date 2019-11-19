import React, { useState } from "react";
import {
  Row,
  Col,
  Form,
  FormGroup,
  FormFeedback,
  FormInput,
  FormSelect,
  Button
} from "shards-react";

const FormValidation = ( props ) => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return validateEmail(email) && password.length > 0;
  }

  function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
  
  return (<Col sm="12" md="20">
    <strong className="text-muted d-block mb-2">Credential Check</strong>
    <Form>
      <Row form>
        <Col md="12" className="form-group">
          <FormInput
            type = 'email'
            placeholder="Please Enter Your Email"
            required
            value = { email }
            valid ={ validateEmail(email) }
            onChange={e => setEmail(e.target.value)}
          />
          <FormFeedback valid ={ validateEmail(email) }>The first name looks good!</FormFeedback>
        </Col>
      </Row>
      
      <FormGroup>
        <FormInput placeholder="Password"
         type = 'password'
         required 
         value = { password }
         onChange={e => setPassword(e.target.value)}
        />
        <FormFeedback>The username is taken.</FormFeedback>
      </FormGroup>
    
      <Button block bsSize="large" disabled={ !validateForm() } type="submit">
          Login
      </Button>
    </Form>
  </Col>
)};

export default FormValidation;
