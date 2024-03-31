import { BrowserRouter, Navigate, Route, Routes as RouterRoutes } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import HomePage from "../pages/HomePage";
import ProtectedRoute from "./PrivateRoute";
import NotFoundPage from "../pages/NotFoundPage";
import LoginPageRoute from "./LoginPageRoute";

const Routes = () => {
  const { isLoading } = useAuth();
  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <BrowserRouter>
          <RouterRoutes>
            <Route path="/login" element={<LoginPageRoute />} />
            <Route path="/" element={<ProtectedRoute />}>
              <Route index element={<Navigate to="/home" />} />
              <Route path="home" element={<HomePage />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </RouterRoutes>
        </BrowserRouter>
      )}
    </>
  );
};

export default Routes;
