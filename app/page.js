'use client'
import Section from './Section'
import Title from './Title'
import { about_section, education_section, 
  experience_section } from './text'
import 'bootstrap/dist/css/bootstrap.css';
import EduCard from './EduCard';
import Projects from './Projects'
import Navbartw from './Navbartw'

import ExperiencesSection from './Experiences/ExperiencesSection'

export default function Home() {
  return (
    <>
      <Navbartw></Navbartw>
      <main className="grid place-items-center">
        <div className="w-[800px] text-left relative top-12">
          <Title ></Title>
          <Section id={"About"} title={about_section.title} 
            description={about_section.description}/>
          <Section id={"Education"} title={education_section.title} 
            description={<EduCard classes={education_section.classes}></EduCard>}></Section>
          <Section id={"Experience"} title={experience_section.title} 
            description={<ExperiencesSection items={experience_section.items}/>  }></Section>
          <Section id={"Projects"} title={"Projects"} 
            description={<Projects></Projects>}></Section>  
        </div>
      </main>
    </>
  )
}