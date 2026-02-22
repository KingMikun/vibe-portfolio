import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectsDir = path.join(__dirname, 'public', 'content', 'projects');
const outputFile = path.join(__dirname, 'public', 'content', 'projects-list.json');

function parseProjectFile(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n');
    
    const project = {
        title: '',
        description: '',
        image: '',
        link: '',
        tags: [],
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
            if (line.startsWith('order:')) {
                project.order = parseInt(line.replace('order:', '').trim());
            }
        }
    });
    
    return project;
}

try {
    if (!fs.existsSync(projectsDir)) {
        fs.mkdirSync(projectsDir, { recursive: true });
    }
    
    const files = fs.readdirSync(projectsDir).filter(f => f.endsWith('.md'));
    const projects = files.map(file => {
        return parseProjectFile(path.join(projectsDir, file));
    });
    
    projects.sort((a, b) => a.order - b.order);
    
    fs.writeFileSync(outputFile, JSON.stringify(projects, null, 2));
    console.log('✓ Projects compiled successfully');
} catch (error) {
    console.error('Error compiling projects:', error);
    process.exit(1);
}
