import './About.css'

function About({ content }) {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">About</h2>
        <div className="about-content">
          <p>{content}</p>
        </div>
      </div>
    </section>
  )
}

export default About
