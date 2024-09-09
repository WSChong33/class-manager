import React from "react";
import NavBar from '../navbar/NavBar';
import SidebarItem from "./SidebarItem";
import ClassItem from "./ClassItem";
import './Main.css';

const Main: React.FC = () => {
    return (
        <>
            <NavBar />

            <div className="main-container">
                <div className="sidebar-container">
                    <div>
                        { /* Foreach loop, make a sidebar component */ }
                        <SidebarItem name="CSE 303" />

                        <SidebarItem name="+ Add class" />
                    </div>
                </div>
                <div className="class-container">
                    <ClassItem name="CSE 303"/>
                </div>
            </div>
        </>
    );
}

export default Main;