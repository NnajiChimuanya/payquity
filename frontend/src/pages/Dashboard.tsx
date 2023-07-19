import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboardBody">Dashboard</div>
    </div>
  );
};

export default Dashboard;
