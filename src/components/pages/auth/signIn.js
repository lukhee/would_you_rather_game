import React, { useState } from "react";
import { login } from "../../../actions/auth";
import { connect } from "react-redux";
import Proptypes from "prop-types";
import { validateLoginData } from "../helpers/validator";

const SignInPage = ({ login, history, auth: { isAuthenticated } }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    errors: {},
  });
  const { email, password } = formData;

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("submil login data")
    const { valid, errors } = validateLoginData({ email, password });
    if (!valid) {
      setFormData({
        ...formData,
        errors: errors,
      });
      return;
    }
    login(formData, history);
  };

  const onChangeHandler = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  return (
    <div className="col-md-8 mx-auto py-4 text-center shadow-lg">
      <span className="mb-2 p-2 rounded-circle bg-danger text-white">
        {" "}
        <i className="fas fa-user-lock"></i>
      </span>
      <h2> Sign In </h2>
      <div>
        <form
          onSubmit={(e) => onSubmit(e)}
          className="mt-2 py-4 rounded"
        >
          <div className="form-group d-md-flex justify-content-around">
            <div className="col-md-7">
              <input
                type="text"
                onChange={(e) => onChangeHandler(e)}
                value={formData.email}
                placeholder="Email"
                className="form-control mb-3"
                id="email"
              />

              <input
                type="password"
                onChange={(e) => onChangeHandler(e)}
                value={formData.password}
                placeholder="Password"
                className="form-control mb-3"
                id="password"
              />

              <input
                type="submit"
                value="Submit"
                className=" mt-3 mb-1 form-control btn btn-outline-danger"
              />

              <div className="text-left">
                <span
                  onClick={() => history.push("/register")}
                  className="btn px-0 text-danger"
                >
                  Don't have an account? Sign Up
                </span>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

SignInPage.propTypes = {
  login: Proptypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps, { login })(SignInPage);

// const breatheAnimation = keyframes`
//  0% { height: 100px; width: 100px; }
//  30% { height: 400px; width: 400px; opacity: 1 }
//  40% { height: 405px; width: 405px; opacity: 0.3; }
//  100% { height: 600px; width: 100px; opacity: 0.6; }
// `
// const Circle = styled.div`
//  height: 100px;
//  width: 100px;
//  border-style: solid;
//  border-width: 5px;
//  border-radius: 50%;
//  border-color: black;
//  animation-name: ${breatheAnimation};
//  animation-duration: 10s;
//  animation-iteration-count: infinite;
//  animation-fill-mode: both;
// `
// const Container = styled.div`
//  display: flex;
//  align-items: center;
//  justify-content: center;
//  flex-direction: column;
//  height: 450px;
//  `
