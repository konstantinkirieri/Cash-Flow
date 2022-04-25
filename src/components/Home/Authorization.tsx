import { useState } from "react";
import React from "react";
import "./home.scss";

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
        <div className="auth_elem">
            <span>e-mail</span>
            <input type='text' value={email}
          onChange={handleChangeEmail}/>
        </div>
        <div className="auth_elem">
            <span>password</span>
            <input type="password"
          value={pass}
          onChange={handleChangePass}/>
        </div>
        <input className="btnLog" type="submit" value="Sign In" disabled={loading} />
    </form>
    {error && <h4>{error}</h4>}
    </>
    )
}