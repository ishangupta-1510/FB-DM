import { FBMessagesPage } from "./components/FBMessagesPage";
import { FBPageIntegrationPage } from "./components/FBPageIntegrationPage";
import { LoginPage } from "./components/LoginPage";
import { SignUpPage } from "./components/SignUpPage";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<SignUpPage />} />
          <Route
            exact
            path="/fb-integration"
            element={<FBPageIntegrationPage />}
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/messages" element={<FBMessagesPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
