import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";
import { selectAuth } from "../components/store/auth/selectors";

export const PublicRoute = ({ children }: any) => {
  const authed = useSelector(selectAuth);

  return !authed ? children : <Navigate to="/report" replace />;
};

export const PublicOutlet = () => {
  const authed = useSelector(selectAuth);

  return !authed ? <Outlet /> : <Navigate to="/report" replace />;
};