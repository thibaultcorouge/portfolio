import githubLogo from "../assets/Octicons-mark-github.svg"
import mailLogo from"../assets/envelope-regular.svg";
import linkdinLogo from"../assets/icons8-linkedin.svg"

function Footer() {
    return (
    <footer className="footer">
        <div className="card-footer">
            <ul>
                <li>
                    <a href="https://github.com/thibaultcorouge">
                        <img src={githubLogo} alt="Github logo" />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src={linkdinLogo} alt="Linkdin logo" />
                    </a>
                </li>
                <li>
                    <a href="mailto:thibault.corouge@gmail.com">
                        <img src={mailLogo} alt="Mail logo" />
                    </a>
                </li>
            </ul>
        </div>
        <div>
            copyright etc
        </div>
    </footer>
    )
}

export default Footer;