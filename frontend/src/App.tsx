import React from "react";
import { AuthProvider } from "./contexts/AuthContext";

import Routes from "./routes/Routes";
import { UserProvider } from "./contexts/UserContext";

const App: React.FC = () => {
  return (
    <AuthProvider>
      <UserProvider>
        <Routes />
      </UserProvider>
    </AuthProvider>
  );
};

export default App;
