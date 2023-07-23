'use client'
import Section from './Section'
import Title from './Title'
import { about_section, education_section, 
  experience_section, projects_section } from './text'
import 'bootstrap/dist/css/bootstrap.css';
import EduCard from './EduCard';
import Navbar from './Navbar'
import Projects from './Projects'
import Experiences from './Experiences'

export default function Home() {
  return (
    <main className="bg-black grid place-items-center">
      <Navbar className="w-1/2"/>
      <div className="w-1/2 text-left relative top-20">
        <Title ></Title>
        <Section id={"About"} title={about_section.title} 
          description={about_section.description}/>
        <Section id={"Education"} title={education_section.title} 
          description={<EduCard classes={education_section.classes}></EduCard>}></Section>
        <Section id={"Experience"} title={experience_section.title} 
          description={<Experiences/>}></Section>
        <Section id={"Projects"} title={"Projects"} 
          description={<Projects></Projects>}></Section>      
      </div>
    </main>
  )
}