import React from "react";
import { IconType } from "react-icons";
import Sidebar from "../components/Sidebar/Sidebar";
import { ImHome3 } from "react-icons/im";
import { AiOutlineWifi, AiOutlineStock } from "react-icons/ai";
import { MdOutlinePayment, MdAccountBalance } from "react-icons/md";
import { BiTransfer, BiHistory } from "react-icons/bi";
import { PiUsersThreeBold } from "react-icons/pi";
import { TbSettingsCog } from "react-icons/tb";
import { FaPowerOff } from "react-icons/fa";

interface ISidebarContents {
  name: string;
  Icon: IconType;
}

const sidebarContents: ISidebarContents[] = [
  {
    name: "Dashboard",
    Icon: ImHome3,
  },
  {
    name: "Dashboard",
    Icon: AiOutlineWifi,
  },
  {
    name: "Dashboard",
    Icon: MdOutlinePayment,
  },
  {
    name: "Dashboard",
    Icon: BiTransfer,
  },
  {
    name: "Dashboard",
    Icon: AiOutlineStock,
  },
  {
    name: "Dashboard",
    Icon: PiUsersThreeBold,
  },
  {
    name: "Dashboard",
    Icon: MdAccountBalance,
  },
  {
    name: "Dashboard",
    Icon: BiHistory,
  },
  {
    name: "Dashboard",
    Icon: TbSettingsCog,
  },
  {
    name: "Dashboard",
    Icon: FaPowerOff,
  },
  {
    name: "Dashboard",
    Icon: ImHome3,
  },
];

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      Dashboard
    </div>
  );
};

export default Dashboard;
