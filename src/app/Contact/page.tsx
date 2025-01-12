
const ContactPage = () => {
  return (
    <div className="contact-page">
      <div className="contact-form-container">
        <h1 className="contact-title">Contact Us</h1>
        <form className="contact-form">
          {/* Name Input */}
          <div>
            <label htmlFor="name" className="contact-label">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="contact-input"
            />
          </div>

          {/* Email Input */}
          <div>
            <label htmlFor="email" className="contact-label">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="contact-input"
            />
          </div>

          {/* Message Input */}
          <div>
            <label htmlFor="message" className="contact-label">Message</label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="contact-textarea"
            />
          </div>

          {/* Submit Button */}
          <div className="submit-button-container">
            <button type="submit" className="submit-button">Send Message</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
