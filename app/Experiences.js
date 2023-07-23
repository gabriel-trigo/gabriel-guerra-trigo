function Experiences() {
  return (
    <>
        <div className="text-left w-full pb-5">
            <div className="w-full">
                BTG Pactual
            </div>
            <div className="pb-2">
                Summer Intern: Technology Division
            </div>
            <div className="w-full flex">
                <div className="basis-1/6 place-items-center p-3 m-auto">
                    <img src={"https://companieslogo.com/img/orig/BPAC3.SA.D-8fade1f3.png?t=1654511556"} alt="Your SVG" />
                </div>
                <div className="basis-5/6">
                    <li>
                        Working on a full-stack application used in the bank's
                        back office operations to manage a specific type of credit 
                        operations and communicate them to the Brazilian stock 
                        exchange (B3). Resources used: Django, MySQL, React. 
                    </li>
                </div> 
            </div>
        </div>
        <div className="text-left w-full pb-2">
            <div className="w-full">
                Columbia University
            </div>
            <div className="pb-2">
                Head Teaching Assistant: UN2801/2802
            </div>
            <div className="w-full flex">
                <div className="basis-1/6 place-items-center p-3 m-auto">
                    <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Columbia_University_shield.svg/1200px-Columbia_University_shield.svg.png"} alt="Your SVG" />
                </div>
                <div className="basis-5/6">
                    <li>
                        Taught 2 recitations per week to a class of ~40 students, 
                        organized exam review sessions, and graded assignments.
                    </li>
                    <li>
                        Obtained 4.52/5 (Fall 2022) and 4.81/5 (Spring 2023) average 
                        scores on end-of-semester anonymous student evaluations. 
                        See my detailed evaluations for <a href={"/fall_2022.pdf"}>Fall 2022</a> and <a href={"/spring_2022.pdf"}>Spring 2022</a>.
                    </li>
                </div> 
            </div>
        </div>
    </>
  );
}

export default Experiences;