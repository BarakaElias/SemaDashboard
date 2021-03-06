import * as React from "react";
import { Navigate } from "react-router-dom";

import useAuth from "../../hooks/useAuth";

// For routes that can only be accessed by unauthenticated users
function GuestGuard({ children }) {
  const { isAuthenticated, isInitialized, user } = useAuth();

  // console.log("guest", user);

  if (isInitialized && isAuthenticated && !user.isSemaAdmin) {
    return <Navigate to="/" />;
  }

  return <React.Fragment>{children}</React.Fragment>;
}

export default GuestGuard;
