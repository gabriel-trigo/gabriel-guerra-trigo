import Bullet from './Bullet';
import Card from 'react-bootstrap/Card';
import Image from 'next/image';

const ExperienceCard = (props) => {
    return (
        <>
            <div className="text-left w-full pb-3">
                <Card className="w-full bg-white">
                    <Card.Body>
                        <div className="flex">
                            { props.company === "Columbia Spectator" ? (
                                <>
                                    <div className="basis-3/5">
                                        <Card.Title>
                                            {props.company}
                                        </Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">
                                            {props.title}
                                        </Card.Subtitle>
                                        <Card.Subtitle className="mb-2 text-muted">
                                            {props.date}
                                        </Card.Subtitle>
                                    </div>
                                    <div className="flex basis-2/5 items-center">
                                        <Image width={props.logoWidth} height={props.logoHeight} src={props.logoLink} alt="Your SVG" />
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="basis-5/6">
                                        <Card.Title>
                                            {props.company}
                                        </Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">
                                            {props.title}
                                        </Card.Subtitle>
                                        <Card.Subtitle className="mb-2 text-muted">
                                            {props.date}
                                        </Card.Subtitle>
                                    </div>
                                    <div className="flex basis-1/6 items-center">
                                        <Image width={props.logoWidth} height={props.logoHeight} src={props.logoLink} alt="Your SVG" />
                                    </div>
                                </>
                            )}
                        </div>
                        <div className="text-sm">
                            {props.bullets.map((el) => false ? <Bullet key={el} text={el}/> : <></>)}
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}

export default ExperienceCard
