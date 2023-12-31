import ProjectCard from './ProjectCard'
import { projects_section } from './text';

function Projects() {
    return (
      <div className="grid grid-cols-2 gap-2">
        {projects_section.map((el) => {
            return(
                <ProjectCard key= {el.projectTitle} projectName={el.projectTitle} 
                    projectDescription={el.projectDescription} 
                    websiteLink={el.websiteLink} 
                    githubLink={el.githubLink}>
                </ProjectCard>
            )
        })}
      </div>
    );
  }
  
  export default Projects;