import { Mail, Twitter, Github, Linkedin } from 'lucide-react'
import './Contact.css'

function Contact({ contact }) {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Let's Connect</h2>
        <div className="contact-links">
          <a href={`mailto:${contact.email}`} className="contact-link">
            <Mail size={20} />
            <span>Email</span>
          </a>
          {contact.twitter && (
            <a href={contact.twitter} target="_blank" rel="noopener noreferrer" className="contact-link">
              <Twitter size={20} />
              <span>Twitter</span>
            </a>
          )}
          {contact.github && (
            <a href={contact.github} target="_blank" rel="noopener noreferrer" className="contact-link">
              <Github size={20} />
              <span>GitHub</span>
            </a>
          )}
          {contact.linkedin && (
            <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="contact-link">
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
          )}
        </div>
      </div>
    </section>
  )
}

export default Contact
