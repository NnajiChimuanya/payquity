import React, { useContext } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import { FaUserAlt } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { PayquityContext } from "../context/Context";
import { MdOutlineTableView } from "react-icons/md";
import { AiOutlineWallet } from "react-icons/ai";

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

        <div className="frame2">
          <div className="mainCard">
            <div className="iconContainer">
              <AiOutlineWallet />
            </div>

            <div className="amountContainer">
              <p>Wallet Balance</p>
              <h5>$20,000</h5>
            </div>
          </div>
          <div className="mainCard"></div>
          <div className="mainCard"></div>
          <div className="mainCard"></div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
