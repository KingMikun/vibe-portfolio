import './Footer.css'

function Footer() {
  const year = new Date().getFullYear()
  
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {year} The King. Built with intention.</p>
      </div>
    </footer>
  )
}

export default Footer
