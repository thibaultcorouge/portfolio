import Navbar from "./navbar";

function Header () {

    return(
        <header className="header">
            <Navbar />
            <div className="whoami"><a href="#">Hi i'm Thibault</a></div>
        </header>
    )
}

export default Header