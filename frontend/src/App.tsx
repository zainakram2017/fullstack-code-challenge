import React from "react";
import { AuthProvider } from "./contexts/AuthContext";

import Routes from "./routes/Routes";
import { UserProvider } from "./contexts/UserContext";
import { QuestionProvider } from "./contexts/QuestionContext";

const App: React.FC = () => {
  return (
    <AuthProvider>
      <UserProvider>
        <QuestionProvider>
          <Routes />
        </QuestionProvider>
      </UserProvider>
    </AuthProvider>
  );
};

export default App;
