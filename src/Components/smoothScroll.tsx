import React from "react";

interface SmoothScrollProps {
    targetId: string;
    children: React.ReactNode;
}

const SmoothScroll: React.FC<SmoothScrollProps> = ({targetId, children }) => {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth'});
        }
    };
    return (
        <a href={`#${targetId}`} onClick={handleClick}>
            {children}
        </a>
    );
};

export default SmoothScroll;