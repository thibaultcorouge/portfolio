import React, { useState, useRef } from 'react';
import  projects  from "../pages/project";
import { CgChevronRight,CgChevronLeft } from "react-icons/cg";

const Carousel: React.FC = () => {
    const [index, setIndex] = useState<number>(0);
    const length: number = projects.length;
    const touchStartXRef = useRef<number | null>(null);


    const handlePrevious = () => {
        const newIndex = index - 1 < 0 ? length - 1 : index - 1;
        setIndex(newIndex);
    };

    const handleNext = () => {
        const newIndex = (index + 1) % length;
        setIndex(newIndex);
    };

    const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
        touchStartXRef.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {

        if (!touchStartXRef.current) return;

        const touchEndX = e.changedTouches[0].clientX;
        const touchDiff = touchEndX - touchStartXRef.current;
        const threshold = 10;

        if (Math.abs(touchDiff) > threshold) {
           if(touchDiff > 0) {
            handlePrevious();
        } else {
            handleNext();
        }
    }
        touchStartXRef.current = null;
    };

    return(
        <div className="project">
            <h2 id="Project">Project</h2>
            <div className="carousel" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
                <button className="button-carousel" onClick={handlePrevious}><CgChevronLeft/></button>
                    <div className="project-div">
                        <div className="carousel-track" style= {{transform: `translateX(-${index * 100}%)`}}>
                            {projects.map((project, idx) => (
                                <div key={idx} className="project-card">
                                    <a href="#"><img src={project.imageSrc} alt="project-image" /></a>
                                    <div className="project-description">
                                    <h3>{project.title}</h3>
                                    <p>{project.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                <button className="button-carousel" onClick={handleNext}><CgChevronRight/></button>
            </div>
        </div>
    );
};

export default Carousel