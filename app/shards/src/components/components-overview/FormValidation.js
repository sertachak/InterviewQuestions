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
  
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");

  function validateForm() {
    return name.length > 0 && lastName.length > 0;
  }
  
  return (<Col sm="12" md="6">
    <strong className="text-muted d-block mb-2">Form Validation</strong>
    <Form>
      <Row form>
        <Col md="6" className="form-group">
          <FormInput
            type = 'name'
            placeholder="First name"
            required
            value = { name }
            valid
            onChange={e => setName(e.target.value)}
          />
          <FormFeedback valid>The first name looks good!</FormFeedback>
        </Col>
        <Col md="6" className="form-group">
          <FormInput
            type = 'lastName'
            value = { lastName }
            placeholder="Last name"
            required
            valid
            onChange = { e => setLastName(e.target.value) }
          />
          <FormFeedback valid>The last name looks good!</FormFeedback>
        </Col>
      </Row>
      <FormGroup>
        <FormInput placeholder="Username" required invalid />
        <FormFeedback>The username is taken.</FormFeedback>
      </FormGroup>
      <FormGroup>
        <FormSelect invalid>
          <option>Choose</option>
          <option>...</option>
        </FormSelect>
        <FormFeedback>Please select your state</FormFeedback>
      </FormGroup>
      <Button block bsSize="large" disabled={ !validateForm() } type="submit">
          Login
        </Button>
    </Form>
  </Col>
)};

export default FormValidation;
