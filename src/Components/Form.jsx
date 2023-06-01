import React, { Fragment } from "react";
import { Button, Form } from "react-bootstrap";
import FormInput from "./FormInput";
import { useNavigate } from "react-router-dom";

const FormValid = ({ inputs, values, onChange, setValues }) => {
  const navigate = useNavigate();
  const handleForm = (e) => {
    e.preventDefault();
    setValues("");
    navigate("/");
  };
  return (
    <div>
      {" "}
      <div className="w-full flex justify-center h-[100vh] items-center">
        <Form
          onSubmit={handleForm}
          className="bg-dark text-light rounded p-5 shadow "
        >
          {inputs.map((input) => {
            return (
              <Fragment key={input.id}>
                <FormInput
                  {...input}
                  value={values[input.name]}
                  onChange={onChange}
                />
              </Fragment>
            );
          })}
          <div className="flex justify-between">
            <Button variant="primary" type="submit">
              Submit
            </Button>
            <Button
              variant="warning"
              type="reset"
              onClick={() => setValues("")}
            >
              Reset
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default FormValid;
