import { Link } from "react-router-dom";
function About() {
  return (
    <div>
      <Link to="/contact">Go to Contact</Link>
      <Link to="/"> Go to Home</Link>
    </div>
  );
}

export default About;
