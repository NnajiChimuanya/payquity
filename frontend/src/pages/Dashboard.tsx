import React, { useContext } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import { FaUserAlt } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { PayquityContext } from "../context/Context";

const Dashboard: React.FC = () => {
  const { state, dispatch } = useContext(PayquityContext);
  const { name } = state;
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboardBody">
        <div className="header">
          <div>Welcome back, {name}</div>
          <div>
            <IoMdNotificationsOutline className="notificationsIcon" />
            <FaUserAlt />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
