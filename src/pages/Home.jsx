import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Home Page</h1>
      <br />
      <Link to="/about">Go to About</Link>
      <br /> <br />
      <button onClick={() => navigate("/contact")}>Go to Contact</button>
    </div>
  );
}

export default Home;
