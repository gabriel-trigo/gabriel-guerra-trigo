import Card from 'react-bootstrap/Card';

function ProjectCard(props) {
  return (
    <Card className="p-1 bg-white text-gray-800">
      <Card.Body>
        <Card.Title>{props.projectName}</Card.Title>
        <div className="text-sm">
          {props.projectDescription}
        </div>
        {props.websiteLink !== "" && (
          <Card.Link className="bottom-0" href={props.websiteLink}>
            Website
          </Card.Link>
        )}
        {props.githubLink !== "" && (
          <Card.Link className="bottom-0" href={props.githubLink}>
            Github
          </Card.Link>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;