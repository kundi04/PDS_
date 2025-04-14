import React, { useState, useEffect } from 'react';
import { Card, Row, Col, Table } from 'react-bootstrap';
import '../App.css';
import '../components/Sidebar.css';
import { 
  Users,  
  Calendar,
  LineChartIcon,
  Home,
  FileText,
  Settings,
  LogOut,
  Menu,
  Search,
  Bell,
  UserPlus,
  FileCheck,
  Mail,
  HelpCircle
} from 'lucide-react';

const AdminDashboard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [activeItem, setActiveItem] = useState('home');
  
  useEffect(() => {
    const handleResize = () => {
      setSidebarOpen(window.innerWidth >= 992);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const mainNavItems = [
    { id: 'home', icon: <Home size={20} color="#153d77" />, label: 'Dashboard', active: activeItem === 'home' },
    { id: 'employees', icon: <Users size={20} color="#153d77" />, label: 'Employees', active: activeItem === 'employees' },
    { id: 'payslips', icon: <FileText size={20} color="#153d77" />, label: 'Payslips', active: activeItem === 'payslips' },
    { id: 'settings', icon: <Settings size={20} color="#153d77" />, label: 'Settings', active: activeItem === 'settings' },
  ];

  const secondaryNavItems = [
    { id: 'new-employee', icon: <UserPlus size={20} color="#153d77" />, label: 'Add New Employee' },
    { id: 'pending-payslips', icon: <FileCheck size={20} color="#153d77" />, label: 'Pending Payslips' },
    { id: 'messages', icon: <Mail size={20} color="#153d77" />, label: 'Messages' },
    { id: 'help', icon: <HelpCircle size={20} color="#153d77" />, label: 'Help & Support' },
  ];

  const handleNavItemClick = (id) => {
    setActiveItem(id);
  };

  const employeeData = [
    { id: 1, name: 'John Doe', department: 'Engineering', status: 'Active', lastpayslip: '25/02/25' },
    { id: 2, name: 'Jane Smith', department: 'Marketing', status: 'Pending', lastpayslip: '25/02/25' },
    { id: 3, name: 'Michael Johnson', department: 'HR', status: 'Active', lastpayslip: '25/02/25' },
    { id: 4, name: 'Sarah Williams', department: 'Finance', status: 'Pending', lastpayslip: '25/02/25' },
  ];

  return (
    <div className="dashboard-container">
      {/* Top Navigation Bar */}
      <nav className="top-nav">
        <div className="nav-left">
          <button className="menu-btn" onClick={toggleSidebar}>
            <Menu size={24} />
          </button>
          <div className="logo">
            <span className="logo-text">PDS</span>
          </div>
        </div>
        <div className="nav-center">
          <div className="search-container">
            <input type="text" placeholder="Search..." className="search-input" />
            <button className="search-btn">
              <Search size={20} />
            </button>
          </div>
        </div>
        <div className="nav-right">
          <button className="nav-icon-btn">
            <Bell size={20} />
          </button>
          <div className="user-avatar">
            <span>SA</span>
          </div>
        </div>
      </nav>

      {/* Sidebar Overlay */}
      {isSidebarOpen && <div className="sidebar-overlay" onClick={toggleSidebar} />}

      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-content">
          <div className="sidebar-section">
            {mainNavItems.map((item) => (
              <a 
                key={item.id}
                href="#" 
                className={`nav-item ${item.active ? 'active' : ''}`}
                onClick={() => handleNavItemClick(item.id)}
                style={{ color: '#153d77' }}
              >
                {item.icon}
                <span style={{ color: '#153d77' }}>{item.label}</span>
              </a>
            ))}
          </div>

          <div className="sidebar-section">
            <h3 className="sidebar-title" style={{ color: '#153d77' }}>Quick Actions</h3>
            {secondaryNavItems.map((item) => (
              <a 
                key={item.id}
                href="#" 
                className="nav-item"
                onClick={() => handleNavItemClick(item.id)}
                style={{ color: '#153d77' }}
              >
                {item.icon}
                <span style={{ color: '#153d77' }}>{item.label}</span>
              </a>
            ))}
          </div>

          <div className="sidebar-footer">
            <a href="#" className="nav-item" style={{ color: '#153d77' }}>
              <LogOut size={20} color="#153d77" />
              <span style={{ color: '#153d77' }}>Logout</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className={`main-content ${isSidebarOpen ? 'sidebar-open' : ''}`}>
        <div className="dashboard-header">
          <div className="d-flex justify-content-between align-items-center w-100">
            <h1 className="h3 fw-bold mb-0">Welcome Admin Sarah</h1>
            <div className="d-flex align-items-center">
              <Calendar className="me-2" size={20} />
              <span>{new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
            </div>
          </div>
        </div>

        <div className="dashboard-body">
          <Row className="g-3 mb-4">
            <Col md={6} lg={3}>
              <Card className="dashboard-card">
                <Card.Body>
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <h6 className="text-muted mb-1">Total Employees</h6>
                      <h3 className="mb-0">142</h3>
                    </div>
                    <div className="card-icon">
                      <Users size={24} />
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={3}>
              <Card className="dashboard-card">
                <Card.Body>
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <h6 className="text-muted mb-1">Pending Payslips</h6>
                      <h3 className="mb-0">300</h3>
                    </div>
                    <div className="card-icon">
                      <LineChartIcon size={24} />
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Card className="dashboard-table-card">
            <Card.Body>
              <h5 className="mb-4">Recent Employees</h5>
              <div className="table-responsive">
                <Table hover className="align-middle">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Department</th>
                      <th>Status</th>
                      <th>Last Payslip</th>
                    </tr>
                  </thead>
                  <tbody>
                    {employeeData.map(emp => (
                      <tr key={emp.id}>
                        <td>{emp.name}</td>
                        <td>{emp.department}</td>
                        <td>
                          <span className={`status-badge ${emp.status.toLowerCase()}`}>
                            {emp.status}
                          </span>
                        </td>
                        <td>{emp.lastpayslip}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </Card.Body>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;