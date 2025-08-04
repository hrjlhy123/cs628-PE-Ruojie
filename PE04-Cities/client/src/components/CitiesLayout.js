import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './CitiesLayout.css';

const CitiesLayout = () => (
    <div className="layout">
        <nav className="nav">
            <NavLink to="/cities" end className="nav-link">Cities</NavLink>
            <NavLink to="/cities/add" className="nav-link">Add City</NavLink>
        </nav>
        <main className="content">
            <Outlet />
        </main>
    </div>
);

export default CitiesLayout;