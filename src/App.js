import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation, matchPath } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Hero from './components/Hero/Hero';
import ProjectList from './components/ProjectList/ProjectList'
import Footer from './components/Footer/Footer';
import projectData from './components/Projects/projectData.json';
import Project from './components/Projects/Project';
import './App.css';

function App() {
  const [projects, setProjects] = useState([]);
  const [projectDetails, setProjectDetails] = useState({});

  useEffect(() => {
    const data = JSON.stringify(projectData);
    const parsedData = JSON.parse(data);
    setProjects(parsedData)
  }, [])

  const location = useLocation();
  matchPath({path: '/:directory'}, location.pathname)

  return (
    <div>
      <NavBar />
      <div className="main-container">
        <Routes>
          <Route path='/' element={<Hero />}/>
          <Route exact path='/:directory' element={projects.filter((project) => project.directory2 === location.pathname).map((project) => <Project
            projectDetails={projectDetails}
            setProjectDetails={setProjectDetails}
            projects={projects}
            setProjects={setProjects}
            key={project.id}
            id={project.id}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            deployment={project.deployment}
            github={project.github}
            directory={project.directory}
          />)} />
        </Routes>
        <ProjectList
          projectDetails={projectDetails}
          setProjectDetails={setProjectDetails}
          projects={projects}
          setProjects={setProjects}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
