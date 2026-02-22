import './Contact.css'

function Contact({ contact }) {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Let's Connect</h2>
        <div className="contact-links">
          <a href={`mailto:${contact.email}`}>Email</a>
          {contact.twitter && <a href={contact.twitter} target="_blank" rel="noopener noreferrer">Twitter</a>}
          {contact.github && <a href={contact.github} target="_blank" rel="noopener noreferrer">GitHub</a>}
          {contact.linkedin && <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>}
        </div>
      </div>
    </section>
  )
}

export default Contact
