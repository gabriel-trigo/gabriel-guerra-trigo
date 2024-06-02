'use client'
import 'bootstrap/dist/css/bootstrap.css'
import { useState } from 'react'
import Section from './components/Section'
import Title from './components/Title'
import { about_section, contact_section, education_section, experience_section } from './text'
import EducationCard from './education/EducationCard';
import Projects from './projects/Projects'
import Navbar from './components/Navbar/Navbar'
import ExperiencesSection from './experiences/ExperiencesSection'

export default function Home() {
  const [currSection, setCurrSection] = useState("About")

  return (
    <>
      <Navbar currSection={ currSection } setCurrSection={ setCurrSection }/>
      <main className="grid place-items-center">
        <div className="w-[800px] text-left relative top-12">
            <Title
                title={ "Gabriel Guerra Trigo" }
            />

            <Section 
                id={ "About" } 
                title={ about_section.title } 
                description={ about_section.description }
            />

            <Section 
                id={ "Contact" } 
                title={ contact_section.title } 
                description={ contact_section.description }
            />

            <Section 
                id={ "Education" } 
                title={ education_section.title } 
                description={ <EducationCard/> }
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