import './Hero.css'

function Hero({ title, subtitle }) {
  return (
    <section className="hero">
      <div className="container">
        <h2 className="hero-title">{title}</h2>
        <p className="hero-subtitle">{subtitle}</p>
        <a href="#work" className="cta-button">View Work</a>
      </div>
    </section>
  )
}

export default Hero
