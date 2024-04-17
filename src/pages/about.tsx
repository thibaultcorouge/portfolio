import Photo from "../assets/envelope-regular.svg";

function Home () {
    return (
        <section id="About" className="about-section">   
            <h2>About Me</h2> 
            <div className="about-div">
                <img src={Photo} alt="picture of me" className="about-img" />                
                <div className="about-p">
                    <p>I have been passionate about technology for as long as I can remember. My love for tech naturally led me to explore the world of web development. It's an area where I feel at home, where every line of code is an opportunity for creative expression and solving exciting problems.</p>
                    <p>My thirst for learning and improvement is insatiable. I am always seeking to acquire strong skills and stay updated with the latest technological advancements. Each new project is an opportunity for me to push my boundaries and grow as a developer.</p>
                </div>
            </div>
        </section>
    )
}

export default Home;