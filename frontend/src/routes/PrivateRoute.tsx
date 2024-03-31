import { FC } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { Layout } from "../components";

const PrivateRoute: FC = () => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? (
    <Layout>
      <Outlet />
    </Layout>
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoute;
