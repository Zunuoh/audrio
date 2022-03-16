import React, { useState } from "react";
import {
  Activity,
  AlignJustify,
  Calendar,
  Command,
  Grid,
  Heart,
  Home,
  Shield,
} from "react-feather";

const menuList = [
  { id: "0", name: "Home", icon: <Home size={20} /> },
  { id: "1", name: "Trends", icon: <Activity size={20} /> },
  { id: "2", name: "Feed", icon: <AlignJustify size={20} /> },
];
const discoveryList = [
  { id: "0", name: "News and Notable", icon: <Grid size={20} /> },
  { id: "1", name: "Release Calendar", icon: <Calendar size={20} /> },
  { id: "2", name: "Feed", icon: <Shield size={20} /> },
];
const collectionList = [
  { id: "0", name: "Favourite Songs", icon: <Heart size={20} /> },
  { id: "1", name: "Artist", icon: <Command size={20} /> },
  { id: "2", name: "Favourite Songs", icon: <AlignJustify size={20} /> },
];

const SidePanel = () => {
  const [menus] = useState(menuList);
  const [discoveries] = useState(discoveryList);
  const [collections] = useState(collectionList);
  return (
    <div className="sidePanelContainer">
      <div className="sidePanelTitleContainer">
        <div>AUDRIO</div>
      </div>

      <div className="sidePanelSubmenuContainer">
        {menus &&
          menus.map((menu) => {
            return (
              <div style={{ display: "flex" }}>
                <div>{menu.icon}</div>
                <p style={{ marginLeft: 10 }}>{menu.name}</p>
              </div>
            );
          })}
      </div>

      <div className="sidePanelSubmenuContainer">
        <div>
          <p style={{ color: "#B8B7BF", fontWeight: "bold" }}>Discover</p>
        </div>
        {discoveries &&
          discoveries.map((discovery) => {
            return (
              <div style={{ display: "flex" }}>
                <div>{discovery.icon}</div>
                <p style={{ marginLeft: 10 }}>{discovery.name}</p>
              </div>
            );
          })}
      </div>

      <div className="sidePanelSubmenuContainer">
        <div>
          <p style={{ color: "#B8B7BF", fontWeight: "bold" }}>
            Your collection
          </p>
        </div>
        {collections &&
          collections.map((collection) => {
            return (
              <div style={{ display: "flex" }}>
                <div>{collection.icon}</div>
                <p style={{ marginLeft: 10 }}>{collection.name}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default SidePanel;
