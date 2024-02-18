import { ReviewsBullet, ReviewsBulletSpectator } from "./Experiences/ReviewsBullet"

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

export const education_section = {
    title: "Education",
    items: [
        {
            institution: "Columbia University",
            graduation: "Expected Graduation: May 2025",
            field: "Major: Computer Science",
            grade: "GPA: 4.0/4.0",
            logoHeight: 70,
            logoWidth: 70,
            logoLink: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Columbia_University_shield.svg/1200px-Columbia_University_shield.svg.png",
            rest: "a"
        }
    ]
}

export const experience_section = {
    title: "Experience", 
    description: "Professional experience", 
    items: [
        {
            company: "BTG Pactual",
            title: "Summer Intern: Software Engineering",
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
            company: "Columbia Spectator",
            title: "Associate Developer",
            date: "September 2023 — Present",
            logoWidth: 300,
            logoHeight: 70,
            logoLink: "https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/ZKALKJLFQFECNGLNTICSJUMFF4.png",
            bullets: [
                <ReviewsBulletSpectator key={"placeholder"}/>, 
                "Technology stack used: Flask, MySQL, React, Node.js",
            ]
        }, 
        {
            company: "Columbia University",
            title: "Teaching Assistant: UN2801/2802, COMS3203",
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

export const projects_section = [
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
        projectDescription: "A website to explore academic \
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
    