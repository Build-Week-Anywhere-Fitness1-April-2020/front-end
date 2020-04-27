import React, { useState } from "react";
import axios from "axios";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

const SignUp = (props) => {
  const [credentials, setCredentials] = useState({
    username: "",
    email: "",
    password: "",
    roles: [],
  });
  const handleChange = (e) => {
    if (e.target.name === "roles") {
      const rolesArray = ["init"];
      rolesArray.pop();
      rolesArray.push(e.target.value);
      setCredentials({
        ...credentials,
        roles: rolesArray,
      });
    } else {
      setCredentials({
        ...credentials,
        [e.target.name]: e.target.value,
      });
    }
  };
  const submit = async (e) => {
    console.log("submit", "<<<submit data");
    e.preventDefault();
    axios
      .post(
        "https://anywherefitness-api.herokuapp.com/auth/register",
        credentials
      )
      .then((res) => {
        // console.log(res.data);
        // res,data,payload
        // redux - send the token to the redux store
        // browser storage - localStorage (this is probably the least secure choice)
        // cookies
        // localStorage.setItem("token", JSON.stringify(res.data.payload));
        // props.history.push("/friends-list");
        console.log(res);
        setCredentials({
          username: "",
          email: "",
          password: "",
          roles: [],
        });
      })
      .catch((err) => console.log({ err }));
  };
  return (
    <div>
      <h1>Sign Up</h1>
      {/* <form onSubmit={submit}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          name="username"
          value={credentials.username}
          onChange={handleChange}
        />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          value={credentials.email}
          onChange={handleChange}
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleChange}
        />
        <label htmlFor="client"> Client </label>
        <input
          type="radio"
          id="client"
          name="roles"
          value="client"
          onChange={handleChange}
        />
        <label htmlFor="instructor"> Instructor </label>
        <input
          type="radio"
          id="instructor"
          name="roles"
          value="instructor"
          onChange={handleChange}
        />
        <button>Submit</button>
      </form> */}

      <Form onSubmit={submit}>
        <FormGroup>
          <Label htmlFor="username">Username</Label>
          <Input
            id="username"
            type="text"
            name="username"
            value={credentials.username}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            name="email"
            value={credentials.email}
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup tag="fieldset">
          <legend>Would you like to register as a client or instructor?</legend>
          <FormGroup check>
            <Label check>
              <Input
                type="radio"
                id="client"
                name="roles"
                value="client"
                onChange={handleChange}
              />{" "}
              I'm a client.
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                type="radio"
                id="instructor"
                name="roles"
                value="instructor"
                onChange={handleChange}
              />{" "}
              I'm an instructor.
            </Label>
          </FormGroup>
        </FormGroup>
      </Form>
      <Button onClick={submit}>Confirm</Button>
    </div>
  );
};

export default SignUp;
