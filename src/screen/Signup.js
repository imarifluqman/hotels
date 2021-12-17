import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import Btn from "../components/btn";
import Input from "../components/input";
import { signUp } from "../config/firebase";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate(); 

  let signup = (e) => {
    e.preventDefault();
    let obj = {
      email,
      password,
      name,
    };
    dispatch(() => signUp(obj, navigate));
    console.log(obj);
  };
  console.log(email, password, name);

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
          <h1>Sign Up</h1>
          <form onSubmit={(e) => signup(e)}>
            <div>
              <Input
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                type="text"
              />
            </div>
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
              <Btn>Sign Up</Btn>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignUp;
