
import CustomNav from './Navbar';
import { ReactNode } from 'react';
import './Layout.css'; // Import the CSS file
import "./fonts/Argesta.woff"

interface LayoutProps {
    children: ReactNode;
}

function Layout({ children}: LayoutProps){
    return (
        <div className="layout-container">
            <CustomNav></CustomNav>
            <main>{children}</main>
        </div>
    );
}

export default Layout;