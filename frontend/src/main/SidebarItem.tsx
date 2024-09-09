import React from "react";

interface SidebarItemProp {
    name: string,
}

const SidebarItem: React.FC<SidebarItemProp> = ({ name }) => {

    const handleClick = () => {
        // Send name (Maybe unique ID too?) to class component
        // prob listing state technique
    }

    return (
        <>
            <h4 className="sidebar-item" onClick={handleClick}>{name}</h4>
        </>
    );
};

export default SidebarItem;