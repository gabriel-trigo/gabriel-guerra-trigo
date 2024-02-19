'use client'
import 'bootstrap/dist/css/bootstrap.css';
import Section from './components/Section'
import Title from './components/Title'
import { meta } from './text/metadata'
import { about_section, education_section, experience_section } from './text'
import EduCard from './EduCard';
import Projects from './Projects'
import Navbar from './components/Navbar/Navbar'
import ExperiencesSection from './Experiences/ExperiencesSection'

export default function Home() {
  return (
    <>
      <Navbar/>
      <main className="grid place-items-center">
        <div className="w-[800px] text-left relative top-12">
            <Title
                title={ meta.title }
            />

            <Section 
                id={ "About" } 
                title={ about_section.title } 
                description={ about_section.description }
            />

            <Section 
                id={ "Education" } 
                title={ education_section.title } 
                description={ <EduCard classes={ education_section.classes }></EduCard> }
            />

            <Section 
                id={ "Experience" } 
                title={ experience_section.title } 
                description={ <ExperiencesSection items={experience_section.items }/> }
            />

            <Section 
                id={ "Projects" } 
                title={ "Projects" } 
                description={ <Projects/> }
            />  
        </div>
      </main>
    </>
  )
}