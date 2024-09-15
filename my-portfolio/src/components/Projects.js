import React from 'react';
import './Projects.css';

const projects = [
  {
    title: 'Article Analyzer',
    description: 'Effortlessly evaluate and summarize articles with this powerful tool. Utilizing advanced natural language processing, it provides insightful analytics, readability scores, and key theme extraction. Perfect for researchers and writers looking to enhance their content.',
    repo: 'https://github.com/csana004/Article-Analyzer',
    skills: ['Python', 'Natural Language Processing', 'Text Analysis'],
    images: ['/images/Screenshot (7).png', '/images/Screenshot (8).png']
  },
  {
    title: 'Wheat',
    description: 'Experience real-time weather updates with this dynamic Weather App. It provides current weather data and features a unique background that changes according to the weather conditions. Whether it\'s sunny, rainy, or cloudy, the app\'s background adapts to reflect the current weather, offering an engaging and visually immersive experience.',
    repo: 'https://github.com/csana004/Wheat',
    skills: ['Kotlin', 'Android'],
    images: ['/images/WhatsApp Image 2024-09-14 at 6.18.46 PM (1).jpeg', '/images/WhatsApp Image 2024-09-14 at 6.18.46 PM.jpeg', '/images/WhatsApp Image 2024-09-14 at 6.18.47 PM.jpeg']
  },
  {
    title: 'JarvisAI',
    description: 'Unlock the potential of AI with JarvisAI, an advanced virtual assistant designed to streamline tasks and provide intelligent responses. This project features natural language processing capabilities to understand and execute user commands effectively. With ongoing enhancements and features on the horizon, JarvisAI is evolving to offer even more sophisticated interactions and functionalities. Stay tuned for more updates as we continue to refine and expand its capabilities.',
    repo: 'https://github.com/csana004/jarvisai',
    skills: ['Python', 'Natural Language Processing', 'AI', 'Machine Learning'],
    images: ['/images/cute-robot.webp']
  },
  {
    title: 'AI Query Responder',
    description: 'Transform how queries are answered with the AI Query Responder! This project uses sophisticated natural language processing to interpret and respond to user questions with precision. Designed for seamless interaction, it provides accurate and relevant answers based on a variety of inputs. With its cutting-edge technology and ongoing improvements, AI Query Responder aims to enhance user experiences and streamline information retrieval.',
    repo: 'https://github.com/csana004/AI_Query_Responder',
    skills: ['Python', 'Natural Language Processing', 'AI', 'Machine Learning'],
    images: ['/images/Screenshot (16).png', '/images/Screenshot (15).png', '/images/Screenshot (18).png']
  },
  {
    title: 'Smart Grass-Cutting Robot',
    description: 'An intelligent grass-cutting robot that uses IoT and computer vision to distinguish between useful and unuseful plants, ensuring efficient and selective cutting. Repo upcoming',
    skills: []
  },
];

function Projects() {
  return (
    <section className="projects-section">
      <h1>Projects</h1>
      <div className="repo-list">
        {projects.map((project, index) => (
          <div className="repo-item" key={index}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <div className="skills">
              {project.skills.length > 0 && <strong>Skills:</strong>}
              <ul>
                {project.skills.map((skill, idx) => (
                  <li key={idx}>{skill}</li>
                ))}
              </ul>
            </div>
            <div className="image-slider">
              {project.images && project.images.length > 0 && project.images.map((image, idx) => (
                <img key={idx} src={image} alt={`${project.title} screenshot ${idx + 1}`} />
              ))}
            </div>
            <a href={project.repo} target="_blank" rel="noopener noreferrer">View on GitHub</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;