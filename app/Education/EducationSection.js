import EducationCard from './ExperienceCard'

const ExperiencesSection = (props) => {
    return (
        <>
            {props.items.map((el) => {
                return <EducationCard 
                    institution={el.institution}
                    graduation={el.graduation}
                    field={el.field}
                    grade={el.grade}
                    logoWidth={el.logoWidth}
                    logoHeight={el.logoHeight}
                    logoLink={el.logoLink}
                    rest={el.rest}
                    key={el.institution}
                />
            })}
        </>
    )
}

export default ExperiencesSection;