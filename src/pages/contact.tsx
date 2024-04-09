import githubLogo from "../assets/Octicons-mark-github.svg"
import mailLogo from"../assets/envelope-regular.svg";
import linkdinLogo from"../assets/icons8-linkedin.svg"

function Contact() {

    return (
        <div className="contact-page">
            <h2 id="contact">Reach Me</h2>
            <div className="contact-logo">
                <ul>
                    <li>
                        <a href="https://github.com/thibaultcorouge" target="_blank">
                            <img src={githubLogo} alt="Github logo" />
                        </a>
                    </li>
                    <li>
                        <a href="#" target="_blank">
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
        </div>
    )
}


export default Contact;