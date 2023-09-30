import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import Image from 'next/image';

function EduCard(props) {
  return (
    <Card className="w-full bg-zinc-200">
      <Card.Body>
        <div className="flex">
          <div className="basis-5/6">
            <Card.Title>
                {"Columbia University"}
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {"Expected Graduation: May 2025"}
            </Card.Subtitle>
            <Card.Subtitle className="mb-2 text-muted">
              {"Major: Computer Science"}
            </Card.Subtitle>
            <Card.Subtitle className="mb-2 text-muted">
              {"GPA: 4.0/4.0"}
            </Card.Subtitle>
          </div>
          <div className="flex basis-1/6 items-center">
            <Image width={70} height={70} src={"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Columbia_University_shield.svg/1200px-Columbia_University_shield.svg.png"} alt="Your SVG" />
          </div>
        </div>
        <Table bordered size="sm" className="text-center table-fixed">
          <thead className="text-sm">
            <tr>
              <th>Fall 2021</th>
              <th>Spring 2022</th>
              <th>Fall 2022</th>
              <th>Spring 2023</th>
              <th>Fall 2023</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            <tr>
            <td rowSpan={2}>Intro. Comp. Science</td>
              <td rowSpan={2}>Data Structures & Algorithms</td>
              <td>Analysis of Algorithms I</td>
              <td>Advanced Algorithms</td>
              <td rowSpan={2}>Intro. Databases</td>
            </tr>
            <tr>
              <td>Advanced Programming</td>
              <td>Artificial Intelligence</td>
            </tr>
            <tr>
              <td rowSpan={2}>Multivariable Calculus</td>
              <td rowSpan={2}>Computational Linear Algebra</td>
              <td>Discrete Math</td>
              <td>Comp. Science Theory</td>
              <td rowSpan={2}>Applied Machine Learning</td>
            </tr>
            <tr>
              <td>Probability</td>
              <td>Statistical Inference</td>
            </tr>
          </tbody>
        </Table>
        <Card.Link className="bottom-0" href="/transcript.pdf">Transcript</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default EduCard;

/*
{Object.keys(props.classes).map((el, id) => {
  return (
    <grid className="grid grid-cols-1 gap-2 place-items-center">
      {Object.keys(props.classes[el]).map((name, id) => (<ClassCard class={name}></ClassCard>))}
    </grid>
  )
})}
*/