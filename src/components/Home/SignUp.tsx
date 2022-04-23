import { useState } from "react";
import { signUp } from "../../services/firebase";
import { Authorization } from "./Authorization";
//import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom" ;

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
    <>
      <Authorization onSubmit={handleSignUp} error={error} loading={loading} />
      <Link to="/">
      <button className="btnLog" >Sign in</button>
      </Link>
    </>
  );
};