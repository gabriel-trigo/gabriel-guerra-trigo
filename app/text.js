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
    classes: {
        "semester_1": {
            "Intro Comp. Science": null, 
            "Multivariable Calculus": null
        }, 

        "semester_2": {
            "Data Structures": null, 
            "Comp. Linear Algebra": null
        }, 

        "semester_3": {
            "Analysis of Algorithms": null, 
            "Advanced Programming": null, 
            "Discrete Math": null, 
            "Probability": null
        }, 

        "semester_4": {
            "Advanced Algorithms": null, 
            "Artificial Intelligence": null, 
            "Computer Science Theory": null, 
            "Statistical Inference": null
        }
    }
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
                "Built a full-stack web application used by the bank’s back office to manage a new type of credit operation. \
                    App implemented features to intake and validate client data, register collateral information with the \
                    stock exchange, and listen to/match incoming transactions. \
                    Achieved efficiency gain of 10x in transaction processing speed.", 

                "Technology stack used: FastAPI, MySQL, React, and AWS Services (SQS and Lambda).", 

                "Implemented automations for data integration and record matching \
                    for credit operations using cloud services AWS Glue and Lambda."
            ]
        }, 
        {
            company: "Columbia University",
            title: "Teaching Assistant: UN2801/2802, COMS3203",
            date: "September 2022 — Present",
            logoWidth: 70,
            logoHeight: 70,
            logoLink: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Columbia_University_shield.svg/1200px-Columbia_University_shield.svg.png",
            bullets: [
                "Served as TA for Accelerated Physics I, II [UN2801/2802] (Fall 2022 and Spring 2023) \
                    under Prof. Norman Christ, and as TA for Discrete Math [COMS3203] (Fall 2023) \
                    under Prof. Tony Dear.", 

                "UN2801/2801: taught 2 recitations per week to a class of ~40 students, organized \
                    exam review sessions, and graded assignments. COMS3023: held recitations \
                    weekly, managed class discussion board, and graded assignments.", 

                "Obtained 4.52/5 (Fall 2022) and 4.81/5 (Spring 2023) average \
                    scores on end-of-semester anonymous student evaluations. \
                    See my detailed evaluations for Fall 2022 and Spring 2023."
            ]
        }, 
        {
            company: "Voxus",
            title: "Intern",
            date: "December 2020 — August 2021",
            logoWidth: 70,
            logoHeight: 70,
            logoLink: "https://www.voxus.com.br/img/home/banner-home-dragon.svg",
            bullets: [
                "Responsible for developing and maintaining the \
                    company sales CRM system, adapting it to the \
                    changes in the sales pipeline.", 

                "Automated an internal dashboard tool to supply managers with live sales data, \
                    eliminating the need for manual reports."
            ]
        }
    ]
}

export const projects_section = [
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
        animations from my youtube channel (only has one video, so far trying \
        find get time to make more). Made with Manim-Python.",
        websiteLink: "https://www.youtube.com/channel/UCE-9gcnLnBjS0qqLxFXkIOw", 
        githubLink: "https://github.com/gabriel-trigo/from_scratch"
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
    