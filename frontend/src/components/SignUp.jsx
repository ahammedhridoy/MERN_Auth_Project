import { useState } from "react";
import axios from "axios";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    try {
      if (!name || !email || !password) {
        alert("Please fill all the fields");
        return;
      }
      const res = await axios.post("http://localhost:3000/api/signup", {
        name,
        email,
        password,
      });

      if (res.status === 201) {
        alert("User created successfully");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen hero bg-base-200">
      <div className="shadow-xl card bg-base-100 w-96">
        <div className="card-body">
          <h2 className="text-3xl card-title">Signup</h2>
          <input
            type="text"
            placeholder="Name"
            className="w-full max-w-xs input input-bordered"
            onChange={(e) => setName(e.target.value)}
          />
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
            Already have an account? <a href="/login">Login</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
