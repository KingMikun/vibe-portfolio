import { useState, useEffect } from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [content, setContent] = useState({
    hero: { title: '', subtitle: '' },
    about: '',
    contact: { email: '', twitter: '', github: '', linkedin: '' },
    projects: []
  })

  useEffect(() => {
    loadContent()
  }, [])

  async function loadContent() {
    try {
      // Load hero content
      const heroRes = await fetch('/content/pages/home.md')
      const heroText = await heroRes.text()
      const hero = parseMarkdown(heroText)

      // Load about content
      const aboutRes = await fetch('/content/pages/about.md')
      const aboutText = await aboutRes.text()
      const aboutContent = parseMarkdown(aboutText)

      // Load contact content
      const contactRes = await fetch('/content/pages/contact.md')
      const contactText = await contactRes.text()
      const contact = parseMarkdown(contactText)

      // Load projects
      const projectsRes = await fetch('/content/projects-list.json')
      const projects = await projectsRes.json()

      setContent({
        hero: {
          title: hero.title || 'Sharp Mind, Clear Vision',
          subtitle: hero.subtitle || 'Building digital products that cut through the noise.'
        },
        about: aboutContent.body || 'Developer focused on clarity and precision.',
        contact: {
          email: contact.email || 'your@email.com',
          twitter: contact.twitter || '',
          github: contact.github || '',
          linkedin: contact.linkedin || ''
        },
        projects: projects || []
      })
    } catch (error) {
      console.error('Error loading content:', error)
      // Set fallback content
      setContent({
        hero: {
          title: 'Sharp Mind, Clear Vision',
          subtitle: 'Building digital products that cut through the noise. Early insights, simple execution.'
        },
        about: 'A developer focused on clarity and precision. I build things that work, explain what others miss, and ship before the crowd catches on.',
        contact: {
          email: 'your@email.com',
          twitter: 'https://twitter.com/yourusername',
          github: 'https://github.com/yourusername',
          linkedin: 'https://linkedin.com/in/yourusername'
        },
        projects: [
          {
            title: 'Project Alpha',
            description: 'A clean approach to solving complex problems. Built with intention, shipped with confidence.',
            tags: ['React', 'Node.js', 'Design'],
            link: '#'
          },
          {
            title: 'Project Beta',
            description: 'Finding the signal in the noise. Data-driven insights that actually matter.',
            tags: ['Python', 'Analytics', 'API'],
            link: '#'
          },
          {
            title: 'Project Gamma',
            description: 'Speed meets quality. MVP to market in record time without cutting corners.',
            tags: ['Next.js', 'TypeScript', 'Vercel'],
            link: '#'
          }
        ]
      })
    }
  }

  function parseMarkdown(text) {
    const lines = text.split('\n')
    const data = {}
    let inFrontmatter = false
    let bodyContent = []

    lines.forEach(line => {
      if (line.trim() === '---') {
        inFrontmatter = !inFrontmatter
        return
      }

      if (inFrontmatter) {
        const match = line.match(/^(\w+):\s*"?(.+?)"?$/)
        if (match) {
          data[match[1]] = match[2]
        }
      } else if (line.trim()) {
        bodyContent.push(line)
      }
    })

    data.body = bodyContent.join('\n').trim()
    return data
  }

  return (
    <div className="app">
      <Navigation />
      <Hero title={content.hero.title} subtitle={content.hero.subtitle} />
      <Projects projects={content.projects} />
      <About content={content.about} />
      <Contact contact={content.contact} />
      <Footer />
    </div>
  )
}

export default App
