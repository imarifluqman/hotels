import { useState } from "react";
import { useDispatch } from "react-redux";
import React from "react";
import Input from "../components/input";
import Btn from "../components/btn";
import { userLogin } from "../config/firebase";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  let login = (e) => {
    e.preventDefault();
    let obj = {
      email,
      password,
    };
    dispatch(() => userLogin(obj));
  };

  return (
    <>
      <div className="signup">
        <div className="img">
          <img
            src="https://static.xx.fbcdn.net/rsrc.php/v3/yx/r/iauQmlDrivH.png"
            alt=""
          />
        </div>
        <div className="form">
          <h1>Log In</h1>
          <form onSubmit={(e) => login(e)}>

            <div>
              <Input
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                type="email"
              />
            </div>
            <div>
              <Input
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                type="password"
              />
            </div>
            <div className="btn">
              <Btn>LogIn</Btn>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
