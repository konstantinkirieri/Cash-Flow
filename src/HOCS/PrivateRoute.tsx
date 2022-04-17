import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import { selectAuth } from "../components/store/auth/selectors";

export const PrivateRoute = ({ children }: any) => {
  const authed = useSelector(selectAuth);

  return authed ? children : <Navigate to="/" replace />;
};