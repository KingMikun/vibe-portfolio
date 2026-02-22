import './Navigation.css'

function Navigation() {
  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-content">
          <h1 className="logo">YourName</h1>
          <div className="nav-links">
            <a href="#work">Work</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
