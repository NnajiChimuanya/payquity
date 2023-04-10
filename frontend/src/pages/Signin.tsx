import React, { useState } from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const Signin: React.FC = () => {
  const [Email, setEmail] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [password, setpassword] = useState("");

  return (
    <div className="signup">
      <div className="register-text">Welcome back, Ejiro</div>
      <div className="get-started">
        Good to see you! Please enter your details.
      </div>
      <form className="form">
        <input
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-field"
          type={"text"}
          placeholder="Email"
        />

        <input
          value={password}
          onChange={(e) => setpassword(e.target.value)}
          className="form-field"
          type={"password"}
          placeholder="Password"
        />

        <Button className="button-signin">Log in</Button>

        <div className="alternative-signin">
          Not Ejiro ?
          <Link className="link" to={"/signup"}>
            Register
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Signin;
