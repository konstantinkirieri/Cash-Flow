import { useState } from "react";
import { signUp } from "../../services/firebase";
import { Authorization } from "./Authorization";
import React from "react";
import "../Home/home.scss";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from "react-router-dom";

export const SignUp = () => {

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

  const navigate = useNavigate();

  return (
    <div id="homeComponent">
      <div className="signupHeader">
      <IconButton className="signupArrow" onClick={() => {
                    navigate("/")}}>  
                <ArrowBackIosIcon className='arrowBack'></ArrowBackIosIcon>
            </IconButton> 
            <h1>CashFlow</h1>
      </div>
            <h2 className="greeting">Welcome back!</h2>
      <Authorization onSubmit={handleSignUp} error={error} loading={loading} value = ""/>
    </div>
  );
};