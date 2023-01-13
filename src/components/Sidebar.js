import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import './Navbar.css';

import SidebarItem from './SidebarItem';
import items from './sidebar.json';

export default function Sidebar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <div className="navbar">
        <FaIcons.FaBars onClick={showSidebar} size={70} />
      </div>
      <div className={sidebar ? 'sidebar active' : 'sidebar'}>
        <div className="sidebar-header">
          <div className="sidebar-header-item">
            <h1>Charm</h1>
          </div>
          <div onClick="" className="sidebar-header-item">
            <FaIcons.FaBars onClick={showSidebar} size={70} />
          </div>
        </div>
        {items.map((item, index) => (
          <SidebarItem key={index} item={item} />
        ))}
      </div>
    </>
  );
}
