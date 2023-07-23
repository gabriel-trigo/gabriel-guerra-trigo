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
    description: "Professional experience"
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
        projectTitle: "Q-learning Bird", 
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
    