import ExperienceCard from './ExperienceCard'

const ExperiencesSection = (props) => {
    return (
        <>
            {props.items.map((el) => {
                return <ExperienceCard 
                    company={el.company}
                    title={el.title}
                    date={el.date}
                    logoWidth={el.logoWidth}
                    logoHeight={el.logoHeight}
                    logoLink={el.logoLink}
                    bullets={el.bullets}
                    key= {el.company}
                />
            })}
        </>
    )
}

export default ExperiencesSection;