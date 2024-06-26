import { ReviewsBullet, SpectatorBullet } from "./ReviewsBullet"

export const meta = {
    title: "Gabriel Guerra Trigo",
    description: "My personal web page."
}

export const about_section = {
    title: "About",
    description: "Hi! Welcome to my personal website. \
                I'm a Brazilian student \
                studying Computer Science at Columbia University. This website \
                is meant to work as a resume, as well as an attempt to learn \
                web development and document projects.", 
}

export const contact_section = {
    title: "Contact",
    description: 
        <>
            <a href="mailto:gabrielguerratrigo20@gmail.com">gabrielguerratrigo20@gmail.com</a><br />
            <a href="https://github.com/gabriel-trigo">Github</a><br />
            <a href="https://www.linkedin.com/in/gabriel-trigo-506a641a7/">LinkedIn</a>
        </>
}

export const education_section = {
    title: "Education",
    institution: "Columbia University",
    graduation: "Expected Graduation: May 2025",
    major: "Computer Science",
    grade: "GPA: 4.0/4.0",
    logoHeight: 70,
    logoWidth: 70,
    logoLink: "https://seeklogo.com/images/C/columbia-university-logo-84C4D6BE0B-seeklogo.com.png",
}

export const experience_section = {
    title: "Experience", 
    description: "Professional experience", 
    items: [
        {
            company: "Amazon",
            title: "Software Development Engineer Intern",
            date: "June 2024 - September 2024",
            logoWidth: 120,
            logoHeight: 70,
            logoLink: "https://cdn.logojoy.com/wp-content/uploads/20230629132639/current-logo-600x338.png",
            bullets: []
        }, 
        {
            company: "BTG Pactual",
            title: "Summer Analyst (Software Engineering)",
            date: "June 2023 — September 2023",
            logoWidth: 70,
            logoHeight: 70,
            logoLink: "https://companieslogo.com/img/orig/BPAC3.SA-077c9a44.png?t=1654511556",
            bullets: [
                "Internship project: a full-stack web application used by the bank’s back office to manage a new type of credit operation. \
                    App implemented features to intake and validate client data, register collateral information with the \
                    stock exchange, and listen to/match incoming transactions. \
                    Achieved efficiency gain of 10x in transaction processing speed.", 

                "Implemented automations for data integration and record matching \
                    for credit operations using cloud services AWS Glue and Lambda.",

                "Technology stack used: FastAPI, MySQL, React, and AWS Services (SQS and Lambda).", 
            ]
        }, 
        {
            company: "Columbia University",
            title: "Teaching Assistant",
            date: "September 2022 — Present",
            logoWidth: 100,
            logoHeight: 100,
            logoLink: "https://images.e-flux-systems.com/Columbia_University_shield.png?w=2000",
            bullets: [
                "Served as TA for Accelerated Physics I, II [UN2801/2802] (Fall 2022 and Spring 2023) \
                    under Prof. Norman Christ, and as TA for Discrete Math [COMS3203] (Fall 2023) \
                    under Prof. Tony Dear.", 

                "UN2801/2801: taught 2 recitations per week to a class of ~40 students, organized \
                    exam review sessions, and graded assignments. COMS3023: held recitations \
                    weekly, managed class discussion board, and graded assignments.", 
                <ReviewsBullet key={"placeholder"}/>
            ]
        },
    ]
}

export const spec_projects_section = [
    {
        projectTitle: "culpa.info", 
        projectDescription: "Website where students can browse and \
                            post Columbia Professor and course reviews.",
        websiteLink: "https://www.culpa.info/#/",
        githubLink: ""
    },
    {
        projectTitle: "theshaft.info", 
        projectDescription: "Website with information about Columbia \
                            University dorms and housing lottery.",
        websiteLink: "https://theshaft.info",
        githubLink: "",
    },
    {
        projectTitle: "Columbia Spectator Special Editions", 
        projectDescription: <>
            {"Comemorative Editions of the Columbia Spectator. I worked in the "} 
            <a href="https://homecoming2023.columbiaspectator.com">Homecoming 2023</a> 
            {" and "}
            <a href="https://bhm2024.columbiaspectator.com">Black History Month 2024</a>
            { " editions."} 
            </>,
        websiteLink: "https://www.columbiaspectator.com/se/",
        githubLink: ""
    },
]


export const personal_projects_section = [
    {
        projectTitle: "Personal Website", 
        projectDescription: "The code for this own website. \
                            Made with Next.js and hosted with Vercel.",
        websiteLink: "https://gabriel-trigo.vercel.app/",
        githubLink: "https://github.com/gabriel-trigo/gabriel-guerra-trigo"
    },
    {
        projectTitle: "From Scratch", 
        projectDescription: "Cool educational math/physics animations \
                            for my youtube channel made with manim.",
        websiteLink: "https://www.youtube.com/@gabrieltrigo5172/videos",
        githubLink: "https://github.com/gabriel-trigo/from_scratch"
    },
]

export const open_source_projects_section = [
    {
        projectTitle: "semanticscholar", 
        projectDescription: "A python API client wrapper for the Semantic \
                            Scholar API.",
        websiteLink: "https://pypi.org/project/semanticscholar/",
        githubLink: "https://github.com/danielnsilva/semanticscholar"
    },
]

export const projects_section = [
    {
        projectTitle: "Culpa", 
        projectDescription: "website where students can browse and \
                            post Columbia Professor reviews.",
        websiteLink: "https://www.culpa.info/#/"
    },
    {
        projectTitle: "The Shaft", 
        projectDescription: "Website with information about Columbia \
                            University dorms and housing lottery.",
        websiteLink: "https://theshaft.info"
    },
    {
        projectTitle: "semanticscholar", 
        projectDescription: "Unofficial Python client library for Semantic Scholar APIs. \
                            (An open-source project that I have contributed to).",
        websiteLink: "https://pypi.org/project/semanticscholar/", 
        githubLink: "https://github.com/danielnsilva/semanticscholar"
    },
    {
        projectTitle: "Q-learning", 
        projectDescription: "Casual implementation of adapted \
            Q-learning algorithm for continuous state spaces with \
            neural network for Q-value estimation. Try different AI \
            levels and explore cool vizualizations. Made with Tensorflow, \
            and D3.js, hosted with github pages.",
        websiteLink: "https://gabriel-trigo.github.io/", 
        githubLink: "https://github.com/gabriel-trigo/gabriel-trigo.github.io"
    }, 
    {
        projectTitle: "From Scratch", 
        projectDescription: "Cool code-generated physics educational \
        animations from my youtube channel. Made with manim-python.",
        websiteLink: "https://www.youtube.com/@gabrieltrigo5172/videos", 
        githubLink: "https://github.com/gabriel-trigo/from_scratch"
    }, 
    {
        projectTitle: "Scientific Net Explorer", 
        projectDescription: "Website to explore academic \
            coauthorship graphs. Find the shortest paths \
            between any two authors. Made with React, Flask, \
            and the Semantic Scholar API. (Not hosted yet, \
            working on it).",
        websiteLink: "", 
        githubLink: "https://github.com/gabriel-trigo/erdos_distance"
    }, 
    {
        projectTitle: "Personal Website", 
        projectDescription: "Repository for this own website. \
            Made with Next.js, React-Bootstrap, Tailwind, hosted with \
            Vercel.",
        websiteLink: "", 
        githubLink: "https://github.com/gabriel-trigo/next-personal-website"
    }, 
]
    