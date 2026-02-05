// Load content from CMS markdown files
async function loadContent() {
    try {
        // Load hero content
        const heroResponse = await fetch('/content/pages/home.md');
        const heroText = await heroResponse.text();
        parseHeroContent(heroText);

        // Load about content
        const aboutResponse = await fetch('/content/pages/about.md');
        const aboutText = await aboutResponse.text();
        parseAboutContent(aboutText);

        // Load projects
        const projectsResponse = await fetch('/content/projects-list.json');
        const projects = await projectsResponse.json();
        renderProjects(projects);

        // Load contact links
        const contactResponse = await fetch('/content/pages/contact.md');
        const contactText = await contactResponse.text();
        parseContactContent(contactText);

    } catch (error) {
        console.error('Error loading content:', error);
        // Fallback content if CMS files don't exist yet
        loadFallbackContent();
    }
}

function parseHeroContent(markdown) {
    const lines = markdown.split('\n');
    let title = 'Creative Developer';
    let subtitle = 'Building digital experiences that matter.';

    lines.forEach(line => {
        if (line.startsWith('title:')) {
            title = line.replace('title:', '').trim().replace(/"/g, '');
        }
        if (line.startsWith('subtitle:')) {
            subtitle = line.replace('subtitle:', '').trim().replace(/"/g, '');
        }
    });

    document.getElementById('hero-title').textContent = title;
    document.getElementById('hero-subtitle').textContent = subtitle;
}

function parseAboutContent(markdown) {
    const contentStart = markdown.indexOf('---', 3) + 3;
    const content = markdown.substring(contentStart).trim();
    document.getElementById('about-text').textContent = content;
}

function parseContactContent(markdown) {
    const lines = markdown.split('\n');
    
    lines.forEach(line => {
        if (line.startsWith('email:')) {
            const email = line.replace('email:', '').trim().replace(/"/g, '');
            document.getElementById('email-link').href = `mailto:${email}`;
        }
        if (line.startsWith('twitter:')) {
            const twitter = line.replace('twitter:', '').trim().replace(/"/g, '');
            document.getElementById('twitter-link').href = twitter;
        }
        if (line.startsWith('github:')) {
            const github = line.replace('github:', '').trim().replace(/"/g, '');
            document.getElementById('github-link').href = github;
        }
        if (line.startsWith('linkedin:')) {
            const linkedin = line.replace('linkedin:', '').trim().replace(/"/g, '');
            document.getElementById('linkedin-link').href = linkedin;
        }
    });
}

function renderProjects(projects) {
    const grid = document.getElementById('projects-grid');
    grid.innerHTML = '';

    projects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';
        
        card.innerHTML = `
            ${project.image ? `<img src="${project.image}" alt="${project.title}" class="project-image">` : ''}
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                ${project.link ? `<a href="${project.link}" class="project-link" target="_blank">View Project →</a>` : ''}
            </div>
        `;
        
        grid.appendChild(card);
    });
}

function loadFallbackContent() {
    // Fallback if CMS content isn't loaded yet
    document.getElementById('hero-title').textContent = 'Sharp Mind, Clear Vision';
    document.getElementById('hero-subtitle').textContent = 'Building digital products that cut through the noise. Early insights, simple execution.';
    
    document.getElementById('about-text').textContent = 'A developer focused on clarity and precision. I build things that work, explain what others miss, and ship before the crowd catches on.';
    
    const fallbackProjects = [
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
    ];
    
    renderProjects(fallbackProjects);
}

// Set current year
document.getElementById('year').textContent = new Date().getFullYear();

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Load content on page load
loadContent();
