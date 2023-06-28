import React, { useState } from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const Signup: React.FC = () => {
  const [Email, setEmail] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [password, setpassword] = useState("");
  return (
    <div className="signup-container">
      <div className="signup">
        <div className="register-text">Register</div>
        <div className="get-started">Let's get started with your info.</div>
        <form className="form">
          <input
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-field"
            type={"text"}
            placeholder="Email"
          />

          <input
            value={phoneNumber}
            onChange={(e) => setphoneNumber(e.target.value)}
            className="form-field"
            type={"text"}
            placeholder="Phone Number"
          />

          <input
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            className="form-field"
            type={"password"}
            placeholder="Password"
          />

          <Button className="button-signup">Continue</Button>
          <div className="alternative-signup">
            {" "}
            <Link className="link" to={"/"}>
              Login instead
            </Link>
          </div>
        </form>
      </div>
      <div className="section1"></div>
    </div>
  );
};

export default Signup;
