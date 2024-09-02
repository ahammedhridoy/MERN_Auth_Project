import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async () => {
    try {
      if (!email) {
        alert("Please enter your email");
        return;
      }

      const res = await axios.post("http://localhost:3000/api/forgot", {
        email,
      });

      if (res.status === 200) {
        alert("Forgot password Link sent successfully");
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen hero bg-base-200">
      <div className="shadow-xl card bg-base-100 w-96">
        <div className="card-body">
          <h2 className="text-3xl card-title">Forgot Password</h2>

          <input
            type="email"
            placeholder="Email"
            className="w-full max-w-xs input input-bordered"
            onChange={(e) => setEmail(e.target.value)}
          />

          <button onClick={handleSubmit} className="btn btn-neutral">
            Send
          </button>
          <p>
            Already have an account? <a href="/login">Login</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
