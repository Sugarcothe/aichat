import { useAuth } from "@clerk/clerk-react";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const DashboardLayout = () => {
  const { userId, isLoaded } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoaded && !userId) {
      // Redirect to sign-in page or handle unauthenticated user
      navigate("/sign-in");
    }
  }, [isLoaded, userId, navigate]);

  if (!isLoaded) return "Loading...";

  return (
    <div className="dashoardLayout">
      <div className="menu">Menu</div>
      <div className="content">Content</div>
    </div>
  );
};

export default DashboardLayout;
