import React, { useState } from "react";
import axios from "axios";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

const LoginForm = (props) => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const submit = (e) => {
    e.preventDefault();
    axios
      .post("https://anywherefitness-api.herokuapp.com/auth/login", credentials)
      .then((res) => {
        console.log(res);
        setCredentials({
          username: "",
          password: "",
        });
      })
      .catch((err) => console.log({ err }));
  };

  return (
    <Form onSubmit={submit}>
      <FormGroup>
        <Label htmlFor="username">Username</Label>
        <Input
          id="username"
          type="text"
          name="username"
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          type="password"
          name="password"
          onChange={handleChange}
        />
      </FormGroup>
      <Button>Confirm</Button>
    </Form>
  );
};

export default LoginForm;
