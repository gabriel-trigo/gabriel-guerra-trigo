import Image from 'next/image'
import Card from 'react-bootstrap/Card';

function Experiences() {
  return (
    <>
        <div className="text-left w-full pb-5">
            <Card className="w-full bg-zinc-200">
                <Card.Body>
                    <div className="flex">
                        <div className="basis-5/6">
                            <Card.Title>
                                BTG Pactual
                            </Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">
                                Summer Intern: Software Engineering
                            </Card.Subtitle>
                            <Card.Subtitle className="mb-2 text-muted">
                                June 2023 — August 2023
                            </Card.Subtitle>
                        </div>
                        <div className="flex basis-1/6 items-center">
                            <Image width={70} height={70} src={"https://companieslogo.com/img/orig/BPAC3.SA-077c9a44.png?t=1654511556"} alt="BTG Pactual Logo" />
                        </div>
                    </div>
                    <div className="text-sm">
                        <li>
                            Built a full-stack web application used by the bank’s back office to manage a new type of credit operation. 
                            App implemented features to intake and validate client data, register collateral information with the 
                            stock exchange, and listen to/match incoming transactions. 
                            Achieved efficiency gain of 10x in transaction processing speed. 
                        </li>
                        <li>
                            Technology stack used: FastAPI, MySQL, React, and AWS Services (SQS and Lambda). 
                        </li>
                        <li>
                            Implemented automations for data integration and record matching 
                            for credit operations using cloud services AWS Glue and Lambda.
                        </li>
                    </div>
                </Card.Body>
            </Card>
        </div>
        <div className="text-left w-full pb-5">
            <div className="w-full">
                Columbia University
            </div>
            <div>
                Teaching Assistant: UN2801/2802, COMS3203
            </div>
            <div className="pb-2">
                (September 2022 — Present)
            </div>
            <div className="w-full flex">
                <div className="basis-1/6 place-items-center p-3 m-auto">
                    <Image width={100} height={100} src={"https://images.e-flux-systems.com/Columbia_University_shield.png?w=2000"} alt="Columbia University Logo" />
                </div>
                <div className="basis-5/6">
                    <li>
                        Served aas TA for Accelerated Physics I, II [UN2801/2802] (Fall 2022 and Spring 2023) 
                        under Prof. Norman Christ, 
                        and as TA for Discrete Math [COMS3203] (Fall 2023) under Prof. Tony Dear.
                    </li>
                    <li>
                        UN2801/2801: taught 2 recitations per week to a class of ~40 students, 
                        organized exam review sessions, and graded assignments. COMS3023: held recitations 
                        weekly, managed class discussion board, and graded assignments.
                    </li>
                    <li>
                        Obtained 4.52/5 (Fall 2022) and 4.81/5 (Spring 2023) average 
                        scores on end-of-semester anonymous student evaluations. 
                        See my detailed evaluations for <a href={"/fall_2022.pdf"}>Fall 2022</a> and <a href={"/spring_2023.pdf"}>Spring 2023</a>.
                    </li>
                </div> 
            </div>
        </div>
        <div className="text-left w-full pb-2">
            <div className="w-full">
                Voxus
            </div>
            <div>
                Intern
            </div>
            <div className="pb-2">
                (December 2020 — August 2021, gap year due to covid)
            </div>
            <div className="w-full flex">
                <div className="basis-1/6 place-items-center p-3 m-auto">
                    <Image width={100} height={100} src={"https://www.voxus.com.br/img/home/banner-home-dragon.svg"} alt="Your SVG" />
                </div>
                <div className="basis-5/6">
                    <li>
                        Responsible for developing and maintaining the company sales 
                        CRM system.
                    </li>
                    <li>
                        Automated an internal dashboard tool to supply managers with 
                        live sales data, eliminating the need for manual reports.
                    </li>
                </div> 
            </div>
        </div>
    </>
  );
}

export default Experiences;