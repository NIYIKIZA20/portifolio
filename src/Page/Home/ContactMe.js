const ContactMe= ()=> {
    return (
      <section id="Contact" className="contactSection">
        <div>
          <h2>Contact Me</h2>
          <p className="contactMe">
            Interested working with me? contact me now!
          </p>
        </div>
        <form className="contactFormContainer">
          <div className="container">
            <label htmlFor="firstName" className="contactLabel">
              <span className="textName">First Name</span>
              <input
                type="text"
                className="contactInput textName"
                name="firstName"
                id="firstName"
                required
              />
            </label>
            <label htmlFor="lastName" className="contactLabel">
              <span className="textName">Last Name</span>
              <input
                type="text"
                className="contactInput textName"
                name="lastName"
                id="lastName"
                required
              />
            </label>
            <label htmlFor="email" className="contactLabel">
              <span className="textName">Email</span>
              <input
                type="email"
                className="contactInput textName"
                name="email"
                id="email"
                required
              />
            </label>
            <label htmlFor="phoneNumber" className="contactLabel">
              <span className="textName">phoneNumber</span>
              <input
                type="number"
                className="contactInput textName"
                name="phoneNumber"
                id="phoneNumber"
                required
              />
            </label>
          </div>
          <label htmlFor="chooseTopic" className="contactLabel">
            <span className="textName">Choose a topic</span>
            <select id="chooseTopic" className="contactInput textName">
              <option>Select One...</option>
              <option>Item 1</option>
              <option>Item 2</option>
              <option>Item 3</option>
            </select>
          </label>
          <label htmlFor="message" className="contactLabel">
            <span className="textName">Message</span>
            <textarea
              className="contactInput textName"
              id="message"
              rows="8"
              placeholder="Type your message..."
            />
          </label>
          <label htmlFor="checkboc" className="checkboxLabel">
            <input type="checkbox" required name="checkbox" id="checkbox" />
            <span className="textTerms">I accept the terms</span>
          </label>
          <div>
            <button className="btn btn-primary contactForm">Submit</button>
          </div>
        </form>
      </section>
    );
  }

  export default  ContactMe;