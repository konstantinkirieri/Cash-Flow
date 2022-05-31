import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";
import { selectAuth } from "../components/store/auth/selectors";
import React from "react";

export const PublicRoute = ({ children }: any) => {
  const authed = useSelector(selectAuth);

  return !authed ? children : <Navigate to="/access" replace />;
};

export const PublicOutlet = () => {
  const authed = useSelector(selectAuth);

  return !authed ? <Outlet /> : <Navigate to="/access" replace />;
};