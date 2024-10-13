import React from 'react';
import { Link } from 'react-router-dom';
import './userSidebar.css'; 

const Sidebar = () => {
  return (
    <div className="bg-danger text-white position-fixed vh-50 rounded-top-right" style={{ marginTop: '100px', zIndex: 1000 }}>
      <ul className="list-unstyled mt-4 px-3">
        <li className="py-3">
          <Link to="/information" className="text-white text-decoration-none">User</Link>
        </li>
        <li className="py-3">
          <Link to="/tracking" className="text-white text-decoration-none">Tracking Status</Link>
        </li>
        <li className="py-3">
          <Link to="/contactus" className="text-white text-decoration-none">Order Again?</Link>
        </li>
        <li className="py-3">
          <Link to="/contactus" className="text-white text-decoration-none">Contact Us</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
