import React, { useState } from "react";
import Button from "@mui/material/Button";

const Signup: React.FC = () => {
  const [Email, setEmail] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [password, setpassword] = useState("");
  return (
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

        {/* <div className="password-container">
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              className="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
            />
            <div className="toggle" onClick={togglePassword}>
              SHOW
            </div>
          </div> */}
        <Button className="button">Continue</Button>
      </form>
    </div>
  );
};

export default Signup;
