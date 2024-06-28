
import CustomNav from './Navbar';
import { ReactNode } from 'react';
import './Layout.css'; // Import the CSS file
import "./fonts/Argesta.woff"


function Layout({ children}){
    return (
        <div className="layout-container">
            <CustomNav></CustomNav>
            <main>{children}</main>
        </div>
    );
}

export default Layout;