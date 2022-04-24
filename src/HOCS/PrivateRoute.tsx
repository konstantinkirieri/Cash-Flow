import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import { selectAuth } from "../components/store/auth/selectors";
import React from "react";

export const PrivateRoute = ({ children }: any) => {
  const authed = useSelector(selectAuth);

  return authed ? children : <Navigate to="/" replace />;
};