import { useState } from 'react';
import './Navbar.css';

export default function SidebarItem({ item }) {
  const [open, setOpen] = useState(false);

  if (item.childrens) {
    return (
      <div className={open ? 'sidebar-item' : 'sidebar-item  open'}>
        <div className="sidebar-title">
          <a href={item.path || '#'} className="sidebar-item plain">
            {item.icon && <i className=""></i>}
            {item.title}
          </a>
          <i
            className="bi-chevron-down toggle-btn"
            onClick={() => setOpen(!open)}
          ></i>
        </div>
        <div className="sidebar-child">
          {item.childrens.map((child, index) => (
            <SidebarItem key={index} item={child} />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className="sidebar-title">
        <a href={item.path || '#'} className="sidebar-item plain">
          {item.icon && <i className=""></i>}
          {item.title}
        </a>
      </div>
    );
  }
}
