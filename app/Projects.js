import ProjectCard from './ProjectCard'
import { spec_projects_section } from './text';

function Projects() {
    return (
      <>
      At Columbia, I'm a member of the engineering 
      team of the Columbia Spectator. Here are some 
      projects I've worked on:
      <div className="grid grid-cols-2 gap-2 mt-4 mb-4">
        {spec_projects_section.map((el) => {
            return(
                <ProjectCard key= {el.projectTitle} projectName={el.projectTitle} 
                    projectDescription={el.projectDescription} 
                    websiteLink={el.websiteLink} 
                    githubLink={el.githubLink}>
                </ProjectCard>
            )
        })}
      </div>
      I'm also recently interested in contributing to
      open-source projects:  
      </>
    );
  }
  
  export default Projects;