import { FC } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { Layout } from "../components";
import { QuestionProvider } from "../contexts/QuestionContext";
import { UserProvider } from "../contexts/UserContext";

const PrivateRoute: FC = () => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? (
    <Layout>
      <UserProvider>
        <QuestionProvider>
          <Outlet />
        </QuestionProvider>
      </UserProvider>
    </Layout>
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoute;
