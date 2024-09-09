import React from "react";  

interface SidebarItemProp {
    name: string,
}

const ClassItem: React.FC<SidebarItemProp> = ({ name }) => {
    return (
        <>
            <h1>{name} - Coursename</h1>
            <h2>Syllabus</h2>
            <h2>Lectures</h2>
            <h2>Homeworks</h2>

            <h2>Notes</h2>

            <h2>Textbooks</h2>
        </>
    )
}

export default ClassItem;