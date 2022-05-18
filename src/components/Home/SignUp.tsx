import { useState } from "react";
import { signUp } from "../../services/firebase";
import { Authorization } from "./Authorization";
import React from "react";
import "../Home/home.scss";

export const SignUp = () => {
    //const navigate: any = useNavigate();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignUp = async (email: string, pass: string | number) => {
    setLoading(true);
    try {
      await signUp(email, pass);
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
      <Authorization onSubmit={handleSignUp} error={error} loading={loading} />
    </div>
  );
};