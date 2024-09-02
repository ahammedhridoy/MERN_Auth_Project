import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const verifyUsers = async () => {
      try {
        const verify = await axios.get("http://localhost:3000/api/verify", {
          withCredentials: true,
        });
        if (verify.data) {
          console.log(verify.data);
        }
      } catch (error) {
        navigate("/");
        console.log(error);
      }
    };

    verifyUsers();
  }, []);
  return (
    <div>
      <div className="flex items-center justify-center min-h-screen text-center hero bg-base-200">
        <h1 className="text-5xl font-bold">Dashboard</h1>
      </div>
    </div>
  );
};

export default Dashboard;
