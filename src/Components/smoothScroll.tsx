import React from "react";

interface smoothScrollProps {
    targetId: string;
    children: React.ReactNode;
}

const SmoothScroll: React.FC<smoothScrollProps> = ({targetId, children }) => {
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