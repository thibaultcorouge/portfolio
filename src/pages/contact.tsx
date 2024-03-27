function Contact() {

    return (
        <div className="contact-page">
            <div className="contact-card">
                <h2>Contactez moi</h2>
                <form action="#" className="contact-form">
                        <input type="text" id="name" name="name" placeholder="Name" required/>
                        <input type="email" id="email" name="email" placeholder="Email" required/>
                        <textarea id="message" name="message" placeholder="Message" required/>
                    <input type="submit" value="submit" className="submit" />
                </form>
            </div>
        </div>
    )
}


export default Contact;