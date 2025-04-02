import React from "react";
import { Nav } from "react-bootstrap";
import { LayoutDashboard, Users, DollarSign, Receipt, Clock, Settings, Shield, ChevronLeft } from "lucide-react";

const Sidebar = ({ open, toggleSidebar }) => {
  const menuItems = [
    { img: "", icon: <img src="/images/omni_logo_white.png" alt="Logo" className="admin-logo" />, path: "/" },
    { title: "Dashboard", icon: <LayoutDashboard size={20} />, path: "/" },
    { title: "Employee Management", icon: <Users size={20} />, path: "/employees" },
    { title: "Payroll Management", icon: <DollarSign size={20} />, path: "/payroll" },
    { title: "Payslip Management", icon: <Receipt size={20} />, path: "/payslips" },
    { title: "Payroll History", icon: <Clock size={20} />, path: "/history" },
    { title: "Settings", icon: <Settings size={20} />, path: "/settings" },
    { title: "Security & Audit Logs", icon: <Shield size={20} />, path: "/security" },
  ];

  return (
    <>
      <div className={`sidebar ${open ? "open" : ""}`}>
        <div className="sidebar-header">
          <button className="close-btn" onClick={toggleSidebar}>
            <ChevronLeft size={20} />
          </button>
        </div>
        <Nav className="flex-column">
          {menuItems.map((item, index) => (
            <Nav.Item key={index} className="nav-item">
              <Nav.Link href={item.path} className="nav-link">
                <span className="me-2">{item.icon}</span>
                {item.title}
              </Nav.Link>
            </Nav.Item>
          ))}
        </Nav>
      </div>
    </>
  );
};

export default Sidebar;
