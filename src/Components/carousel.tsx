import React, { useState } from 'react';
import  projects  from "../pages/project";

const Carousel: React.FC = () => {
    const [index, setIndex] = useState<number>(0);
    const length: number = 5;

    const handlePrevious = () => {
        const newIndex = index - 1;
        setIndex(newIndex < 0 ? length - 1 : newIndex);
    };

    const handleNext = () => {
        const newIndex = index + 1;
        setIndex(newIndex >= length ? 0 : newIndex);
    };

    return(
        <div>
            <button onClick={handlePrevious}>Previous</button>
            <div>
                <h2>{projects[index].title}</h2>
                <div className="project-div">
                    <div className="project-description">
                        <a href="#"><img src={projects[index].imageSrc} alt="project-image" /></a>
                        <div>
                            <h3>{projects[index].title}</h3>
                            <p>{projects[index].description}</p>
                        </div>
                    </div>
                </div>
            </div>
            <button onClick={handleNext}>Next</button>
            <p>{index}</p>
        </div>
    );
};

export default Carousel