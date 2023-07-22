import React, { useContext } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import { FaUserAlt } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { PayquityContext } from "../context/Context";
import { MdOutlineTableView } from "react-icons/md";

const Dashboard: React.FC = () => {
  const { state, dispatch } = useContext(PayquityContext);
  const { name } = state;
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboardBody">
        <div className="header">
          <h3>Dashboard</h3>
          <div className="headerWelcome">
            <p>
              Welcome back, <strong>{name}</strong>{" "}
            </p>
            <div>
              <IoMdNotificationsOutline className="notificationsIcon" />
              <FaUserAlt className="userAvatar" />
            </div>
          </div>
        </div>

        <div className="frame1">
          <button className="requestTerminal">
            {" "}
            <MdOutlineTableView className="terminalIcon" /> Request for terminal
          </button>
          <button className="fundWallet">Fund your wallet </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
