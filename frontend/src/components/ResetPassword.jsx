import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { token } = useParams();
  const handleSubmit = async () => {
    try {
      if (!password) {
        alert("Please enter your password");
        return;
      }

      const res = await axios.post(
        "http://localhost:3000/api/resetpassword/" + token,
        {
          password,
        }
      );

      if (res.status === 200) {
        alert("Password changed successfully");
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
          <h2 className="text-3xl card-title">Reset Password</h2>

          <input
            type="password"
            placeholder="New Password"
            className="w-full max-w-xs input input-bordered"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button onClick={handleSubmit} className="btn btn-neutral">
            Change Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
