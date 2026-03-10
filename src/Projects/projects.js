import React from 'react';
import './projects.css';

const Projects = () => {
    const projects = [
        {
            title: 'Snake Game',
            description: 'Created a simple snake game using Java with user-friendly GUI and game mechanics.',
            github: 'https://github.com/selamawit42/Snake-Game'
        },
        {
            title: 'Stock Management System',
            description: 'Developed a web-based stock management system using Java Servlets, HTML, and CSS.',
            github: 'https://github.com/selamawit42/Stock-Web'
        },
        {
            title: 'Tour Guide Website',
            description: 'Built a tour guide website using HTML, CSS, JavaScript, and PHP for backend functionality.',
            github: 'https://github.com/selamawit42/Tour'
        },
        {
            title: 'Hospital Content Management',
            description: 'Developed a Hospital Content Management System using Laravel, PHP, and MySQL. Supports patient registration, appointments, and admin management.',
            github: ''
        }
    ];

    return (
        <section id="projects" className="section">
            <h2 className="section-title">Projects</h2>
            <div className="proj-grid">
                {projects.map((proj, index) => (
                    <div className="proj-card" key={index}>
                        <h3>{proj.title}</h3>
                        <p>{proj.description}</p>
                        <a
                            href={proj.github || "#"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`github-btn ${!proj.github ? 'disabled' : ''}`}
                        >
                            {proj.github ? "View on GitHub" : "Coming Soon"}
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;
