import { useState } from "react";
import { logIn } from "../../services/firebase";
import React from "react";
import { Authorization } from "./Authorization";
import "./home.scss";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignIn = async (email: string, pass: string | number) => {
    setLoading(true);
    try {
      await logIn(email, pass);
    } catch (err: any) {
      console.log(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  
  return (
      <div id="homeComponent">
            <h1>CashFlow</h1>
            <h2 className="greeting">Welcome back!</h2>
      <Authorization onSubmit={handleSignIn} error={error} loading={loading} />
        <button className="btnLog signup" onClick={() => {
                    navigate("/signup")}}>Sign Up</button>
      </div>
  );
};