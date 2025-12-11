import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  return <button onClick={() => navigate("/home")}>Register & Go to Home</button>;
}