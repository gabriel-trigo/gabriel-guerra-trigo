import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ProjectCard(props) {
  return (
    <Card className="p-1">
      <Card.Body>
        <Card.Title>{props.projectName}</Card.Title>
        <Card.Text>
          A website to explore academic coauthorship graphs. 
          Find the shortest paths between any two authors. Made
          with React, Django, DynamoDB, Semantic Scholar API.
          {props.projectDescription}
        </Card.Text>
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