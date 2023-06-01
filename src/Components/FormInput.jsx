import React from "react";
import { Form } from "react-bootstrap";

const FormInput = ({ id, label, onChange, errorMsg, ...inputProps }) => {
  return (
    <div>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>{label}</Form.Label>
        <Form.Control {...inputProps} onChange={onChange} className="inpt" />
        <span className={`text-red-600 text-xs hidden`}>{errorMsg}</span>
      </Form.Group>
    </div>
  );
};

export default FormInput;
