import React, { useEffect } from "react";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Home from "../pages/Home";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import App from "../App";
import SearchPage from "../pages/SearchPage";
const ProtectedRoute = ({ children }) => {
  const { user } = useSelector((state) => state.user);
  if (!user) {
    return <Navigate to="/auth/login" replace />;
  }
  return children;
};

const PublicRoute = ({ children }) => {
  const { user } = useSelector((state) => state.user);
  if (user) {
    return <Navigate to="/home" replace />;
  }
  return children;
};

export function AppRouter() {
  const { user } = useSelector((state) => state.user);

  return (
    <Router>
      <Navbar />

      <div className="pb-0 mb-0">
        <Routes>
          {/* Protected routes */}
          <Route
            path="/home"
            element={
              <PublicRoute>
                <Home />
              </PublicRoute>
            }
          />

          {/* Protected routes */}
          <Route
            path="/search"
            element={
              <PublicRoute>
                <SearchPage />
              </PublicRoute>
            }
          />

          {/* Default fallback */}
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
      </div>
    </Router>
  );
}
