const fs = require('fs');
const path = require('path');

// Read all project markdown files
const projectsDir = path.join(__dirname, 'content', 'projects');
const outputFile = path.join(__dirname, 'content', 'projects-list.json');

function parseProjectFile(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n');
    
    const project = {
        title: '',
        description: '',
        image: '',
        link: '',
        tags: [],
        featured: false,
        order: 0
    };
    
    let inFrontmatter = false;
    
    lines.forEach(line => {
        if (line.trim() === '---') {
            inFrontmatter = !inFrontmatter;
            return;
        }
        
        if (inFrontmatter) {
            if (line.startsWith('title:')) {
                project.title = line.replace('title:', '').trim().replace(/"/g, '');
            }
            if (line.startsWith('description:')) {
                project.description = line.replace('description:', '').trim().replace(/"/g, '');
            }
            if (line.startsWith('image:')) {
                project.image = line.replace('image:', '').trim().replace(/"/g, '');
            }
            if (line.startsWith('link:')) {
                project.link = line.replace('link:', '').trim().replace(/"/g, '');
            }
            if (line.startsWith('tags:')) {
                const tagsStr = line.replace('tags:', '').trim();
                try {
                    project.tags = JSON.parse(tagsStr);
                } catch (e) {
                    project.tags = [];
                }
            }
            if (line.startsWith('featured:')) {
                project.featured = line.replace('featured:', '').trim() === 'true';
            }
            if (line.startsWith('order:')) {
                project.order = parseInt(line.replace('order:', '').trim());
            }
        }
    });
    
    return project;
}

try {
    const files = fs.readdirSync(projectsDir).filter(f => f.endsWith('.md'));
    const projects = files.map(file => {
        return parseProjectFile(path.join(projectsDir, file));
    });
    
    // Sort by order
    projects.sort((a, b) => a.order - b.order);
    
    fs.writeFileSync(outputFile, JSON.stringify(projects, null, 2));
    console.log('✓ Projects compiled successfully');
} catch (error) {
    console.error('Error compiling projects:', error);
}
