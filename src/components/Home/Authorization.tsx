import { useState } from "react";
import React from "react";
import "./home.scss";
import { Divider } from "@mui/material";

export function Authorization({ onSubmit, error, loading }: any): any {
    const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleChangeEmail = (e: any) => {
    setEmail(e.target.value);
  };
  const handleChangePass = (e: any) => {
    setPass(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    onSubmit(email, pass);
    setEmail("");
    setPass("");
  };

    return (
        <>
        <form className="authorization" onSubmit={handleSubmit}>
            <span>e-mail</span>
            <input type='text' value={email}
          onChange={handleChangeEmail}/>
          <Divider className="authDevider" />
            <span>password</span>
            <input type="password"
          value={pass}
          onChange={handleChangePass}/>
          <Divider className="authDevider" />
        <button className="btnLog" type="submit" disabled={loading}>Sign In</button>
    </form>
    {error && <h4 className="authError">{error}</h4>}
    </>
    )
}