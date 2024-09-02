import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/logout", {
        withCredentials: true,
      });
      localStorage.removeItem("token");

      console.log(res.data);

      if (res.data.status === 200) {
        alert("Logged out successfully");
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center hero bg-base-200">
      <h1 className="text-5xl font-bold">Home</h1>
      <Link to={"/dashboard"} className="my-5">
        {" "}
        <button className="btn btn-neutral">Dashboard</button>
      </Link>
      <Link>
        <button className="btn btn-neutral" onClick={handleSubmit}>
          Logout
        </button>
      </Link>
    </div>
  );
};

export default Home;
