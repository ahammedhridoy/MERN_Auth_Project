import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      if (!email || !password) {
        alert("Please fill all the fields");
        return;
      }

      const res = await axios.post(
        "http://localhost:3000/api/login",
        {
          email,
          password,
        },
        {
          withCredentials: true,
        }
      );

      const { token } = res.data;

      localStorage.setItem("token", token);

      if (res.status === 200) {
        alert("Logged in successfully");
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen hero bg-base-200">
      <div className="shadow-xl card bg-base-100 w-96">
        <div className="card-body">
          <h2 className="text-3xl card-title">Login</h2>
          <input
            type="email"
            placeholder="Email"
            className="w-full max-w-xs input input-bordered"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full max-w-xs input input-bordered"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleSubmit} className="btn btn-neutral">
            Submit
          </button>
          <p>
            Don&apos;t have an account? <a href="/signup">Sign Up</a>
          </p>
          <p>
            Forgot password? <a href="/forgot">Forgot Password</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
