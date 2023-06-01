import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import FormValid from "./Components/Form";

const App = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const inputs = [
    {
      id: 1,
      name: "username",
      placeholder: "Username",
      type: "text",
      label: "Username",
      errorMsg:
        "Username should be 3-16 characters and shouldn't include any special characters!",
      required: true,
      pattern: "^[A-Za-z0-9]{3,16}$",
    },
    {
      id: 2,
      name: "email",
      placeholder: "Email",
      type: "text",
      label: "Email",
      errorMsg: "It should be valid E-mail!",
      required: true,
      pattern: "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$",
    },
    {
      id: 3,
      name: "password",
      placeholder: "Password",
      type: "password",
      label: "Password",
      errorMsg:
        "Password should be 8-20 characters and include at least 1 number,1 special character! ",
      required: true,
      pattern: "^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$",
    },
    {
      id: 4,
      name: "confirmPassword",
      placeholder: "Confirm Password",
      type: "password",
      label: "Confirm Password",
      errorMsg: "Password Doesn't Match!",
      required: true,
      pattern: values.password,
    },
  ];

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return (
    <>
      <Routes>
        <Route
          path="/login"
          element={
            <FormValid
              onChange={onChange}
              values={values}
              inputs={inputs}
              setValues={setValues}
            />
          }
        />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
