import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import Login from "../images/Login background.png";
import { connect } from "react-redux";
import { signUpFetch } from "../store/actions";
import { useHistory } from "react-router-dom";

const SignUp = (props) => {
  const { push } = useHistory();
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
    e.preventDefault();
    // redux action for sign up
    // performs axios call
    await props.signUpFetch(credentials);
    setCredentials({
      username: "",
      email: "",
      password: "",
    });
    push("/");
  };
  return (
    <div className="signUpContainer">
      <div className="signUpImage mx-auto">
        <img src={Login} alt="Woman practicing yoga" className="w-100"></img>
      </div>

      <div className="signUpFormContainer">
        <div className="signUpForm mx-auto">
          <h1 className="font-weight-bold mb-5">Sign Up</h1>
          <Form onSubmit={submit}>
            <FormGroup>
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                type="text"
                name="username"
                value={credentials.username}
                onChange={handleChange}
                required
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
                required
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
                required
                minLength="8"
              />
            </FormGroup>

            <FormGroup tag="fieldset">
              <legend>
                Would you like to register as a client or an instructor?
              </legend>
              <FormGroup check>
                <Label check>
                  <Input
                    type="radio"
                    id="client"
                    name="roles"
                    value="client"
                    onChange={handleChange}
                    required
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
            <Button className="w-25">Confirm</Button>
          </Form>
          {props.error ? <p>{props.error}</p> : null}
          {props.success ? <p>{props.success}</p> : null}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    success: state.signUp.success,
    isFetching: state.signUp.isFetching,
    error: state.signUp.error,
  };
};

export default connect(mapStateToProps, { signUpFetch })(SignUp);
