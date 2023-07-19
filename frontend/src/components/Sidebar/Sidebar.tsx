import React, { useState, useContext } from "react";
import { IconType } from "react-icons";
import { ImHome3 } from "react-icons/im";
import {
  AiOutlineWifi,
  AiOutlineStock,
  AiOutlineRight,
  AiOutlineLeft,
} from "react-icons/ai";
import { MdOutlinePayment, MdAccountBalance } from "react-icons/md";
import { BiTransfer, BiHistory } from "react-icons/bi";
import { PiUsersThreeBold } from "react-icons/pi";
import { TbSettingsCog } from "react-icons/tb";
import { FaPowerOff } from "react-icons/fa";
import { PayquityContext } from "../../context/Context";

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
    name: "Buy Airtime and Data",
    Icon: AiOutlineWifi,
  },
  {
    name: "Bills Payment",
    Icon: MdOutlinePayment,
  },
  {
    name: "Transfer Cash",
    Icon: BiTransfer,
  },
  {
    name: "Target Users",
    Icon: AiOutlineStock,
  },
  {
    name: "Community",
    Icon: PiUsersThreeBold,
  },
  {
    name: "Merchants Account",
    Icon: MdAccountBalance,
  },
  {
    name: "History",
    Icon: BiHistory,
  },
  {
    name: "Settings",
    Icon: TbSettingsCog,
  },
  {
    name: "Logout",
    Icon: FaPowerOff,
  },
];

const Sidebar = () => {
  const { state, dispatch } = useContext(PayquityContext);
  const { showSidebar } = state;

  const [active, setActive] = useState<React.SetStateAction<number>>(0);

  //Set active link
  const handleLinkClick = (id: number) => {
    setActive(id);
  };

  //Toggle the sidebar
  const handleToggleSidebar = () => {
    dispatch({ type: "SET_SHOWSIDEBAR", payload: showSidebar ? false : true });
  };

  return (
    <div className="sidebar">
      {showSidebar ? (
        <AiOutlineLeft
          className="toggleIconOpen"
          onClick={handleToggleSidebar}
        />
      ) : (
        <AiOutlineRight
          className="toggleIconClose"
          onClick={handleToggleSidebar}
        />
      )}

      {sidebarContents.map((item, id) => {
        let { name, Icon } = item;
        return (
          <div
            className={`sidebarItem   ${active === id ? `active` : null}`}
            key={id}
            onClick={() => {
              handleLinkClick(id);
            }}
          >
            <Icon className="sidebarItemIcon" />
            <p className={`${showSidebar ? null : "collapse"}`}>{name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;
