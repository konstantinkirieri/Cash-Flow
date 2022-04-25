import { useState } from "react";
import { Link } from "react-router-dom";
import { logIn } from "../../services/firebase";
import React from "react";
import { Authorization } from "./Authorization";
import "./home.scss";

export const Home = () => {
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
      <div id="homeComponent">
            <h1>CashFlow</h1>
            <h2 className="greeting">Welcome back!</h2>
      <Authorization onSubmit={handleSignIn} error={error} loading={loading} />
      <Link className="signupLink" to="/signup">
        <button className="btnLog signup">Sign Up</button>
      </Link>
      </div>
  );
};