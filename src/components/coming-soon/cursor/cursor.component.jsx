import React, { useState, useEffect } from "react";
import './cursor.styles.scss';
const Cursor = () => {
    const [cursorX, setCursorX] = useState("-10px");
    const [cursorY, setCursorY] = useState("-10px");
    const [hovered, setHovered] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setCursorX(`${e.clientX}px`);
            setCursorY(`${e.clientY}px`);
        };

        const handleMouseEnter = () => {
            setHovered(true);
        };

        const handleMouseLeave = () => {
            setHovered(false);
        };

        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseenter", handleMouseEnter);
        document.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseenter", handleMouseEnter);
            document.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

    return (
        <div
            className={`cursor ${hovered ? "hover-effect" : ""}`}
            style={{ left: cursorX, top: cursorY }}
        ></div>
    )
}

export default Cursor;