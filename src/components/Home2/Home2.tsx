import { useState } from "react";
import { Link } from "react-router-dom";
import { logIn } from "../../services/firebase";
import { Authorization } from "../Home/Authorization";

export const Home2 = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignIn = async (email: any, pass: any) => {
    setLoading(true);
    try {
      await logIn(email, pass);
    } catch (err: any) {
      console.log(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h3>HOME</h3>
      <Authorization onSubmit={handleSignIn} error={error} loading={loading} />
      <Link to="/signup">
        <button className="dlt_button signout">Sign Up</button>
      </Link>
    </>
  );
};