/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from 'react'
import { RadioGroup } from '@headlessui/react'

const experiences = [
  {
    url: "https://vostronet.com",
    company: "VostroNet",
    from:"Oct 2021",
    to: "Present",
    positions: [
      {
        name: "Senior Fullstack Developer",
        from:"Oct 2021",
        to: "Present",
        description: [
          "Carry out front-end and back-end development activities.",
          "Deliver innovative and highly scalable features.",
          "Have input into improving the overall engineering and technical ability of the group and company.",
          "Be knowledgeable and up to date with industry trends, architectures, technologies, frameworks, and techniques",
          "Building and maintaining well structured, testable code.",
          "Make sure the new feature or update meets your expectations.",
          "Ensure software is up-to-date with latest technologies",
          "Assist and train junior software engineers and quality assurance specialists."
        ]
      }
    ]
  },
  {
    url: "https://allcard.com.ph",
    company: "Allcard Technologies",
    from:"NoV 2018",
    to: "Oct 2021",
    positions: [
      {
        name: "System Designer II",
        from:"Jan 2021",
        to: "Oct 2021",
        description: [
          "Migration of traditional version control to Git,",
          "Perform performance testing and identify bottlenecks of the architecture.",
          "Suggest and implement solutions for process improvement",
          "Initiates and capacity testing for new framework, tools and etc.",
          "Ensure consistency of the development team's progress in accordance with the initial design."
        ]
      },
      {
        name: "System Designer I ",
        from:"Oct 2019",
        to: "Jan 2021",
        description: [
          "Interact with customers to gather insight or collaborate with them and analyze business requirements and translate them into requirements",
          "Ensure that system integration and feasibility are taken into consideration when developing high-level product specifications.",
          "Identify and define all aspects of development coding standards, technology, and workflow.",
        ]
      },
      {
        name: "Software Engineer II",
        from:"Nov 2018",
        to: "Oct 2019",
        description: [
          "Create a My Campus Card V2 Terminal to manage access, updates whitelist and logs in and out. (in Raspberry pi, C++, MifareDesfire EV2).",
          "Automated parking barrier integration with My Campus Card V2.",
          "Build a Restful API and update the current Ateilla Rewards Manager for the integrator to allow validate card, check balance, register new customer, redeem points and earn points.(in ASP.Core 2.0,C#, VB.net and C)",
          "Update DCS (Data Capture System) for PAGIBIG, The system can validate PAGIBIG active member’s and can capture KYC details. After the successful KYC capturing the data will be sent to the main PAGIBIG database to update the member’s details as well to the selected bank partners (UBP & AUB). Our system automate the bank account registration and deposit member’s loan. Technologies behind are C#, VB.net, Web Service (SOAP), Restful-API and SFTP.",
        ]
      }
    ]
  },
  {
    url: "#",
    company: "Sistemax Technologies Corp.",
    from:"Nov 2017",
    to: "Oct 2018",
    positions: [
      {
        name: "System Designer",
        from:"Nov 2017",
        to: "Oct 2018",
        description: [
          "Build new reports requested by clients.",
          "Update BIR accredited printer for POS Terminals.",
          "Update custom parking computation requested by clients.",
          "Develop a ticketing system for technical support team.",
          "Assist technical support troubleshooting",
          "Mentored technical support team.",
          "Create indexing scripts to improve database performance.",
          "Update SM Megamall source code Central POS Terminal.",
          "Create Web App to manage BGC Parking LED Display.",
          "Build Restful API that used for Ayala Property Management Corp. Automated Parking’s at BGC and consolidate parking slot to display on a Public Parking LED Display.",
          "POC Emergency Response System and Present with BGC."
        ]
      }
    ]
  },
  {
    url: "https://www.hovidinc.com",
    company: "Hovid Inc.",
    from:"Jul 2016",
    to: "Nov 2017",
    positions: [
      {
        name: "IT Analyst",
        from:"Jul 2016",
        to: "Nov 2017",
        description: [
          "Process daily sales transaction data.",
          "Assist Country Sales’s Manager, Product Manager, National Sales Manager, Accounting and HR to understand the sales data and use it to make strategic business decision.",
          "Use the data to uncover and identify problem and proposed solutions.",
          "Build a system that will process all the data to convert to raw data that readable for different department.",
          "Process monthly transaction data and generate specific repost that will be used by the upper management.",
          "Generate a quarterly report for incentive purposes.",
          "Convince the upper management for best solution that will help the current process.",
          "Create cost analysis for annual IT budget.",
          "Assist in installation and maintenance of telephone system.",
          "Perform system back-up and database archiving processes to ensure data recoverability.",
          "Maintain IT infrastructure and manage help desk issues.",
          "Troubleshoot and repair network, hardware and software components.",
          "Perform routine maintenance and inspection of network and server systems."
        ]
      }
    ]
  },
  
]

export default function Experience() {
  const [selected, setSelected] = useState(experiences[0])
  return (
    <div id="experience"  className="pt-10">
     <div className="px-4 text-center md:text-left py-8">
        <h1 className="text-4xl tracking-tight font-bold text-white sm:text-5xl md:text-6xl">
          <span className="block inline">Where I've Worked</span>
        </h1>
      </div>
    <div className="flex flex-wrap justify-center w-full sm:divide-x xs:divide-y">
      <div className="flex px-4 w-full md:w-auto">
        <List value={selected} onChange={setSelected}/>
      </div>
      <div className="flex w-3/4 sm:px-4 sm:w-2/4">
        <Description value={selected}/>
      </div>
      {/* <div className="w-full px-4 py-16">
        <div className="mx-auto w-full max-w-md">
          
          
        </div>
      </div> */}
    </div>
    </div>
  )
}
function List(props)  {
  return (
    <div className="mx-auto w-full max-w-md">
      <RadioGroup value={props.value} onChange={props.onChange}>
          <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
          <div className="space-y-2">
            {experiences.map((exp, index) => (
              <RadioGroup.Option
                key={index}
                value={exp}
                className={({ active, checked }) =>
                  `${
                    active
                      ? 'ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300'
                      : ''
                  }
                  ${
                    checked ? 'bg-primary bg-opacity-75 text-white' : 'bg-secondary'
                  }
                    relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`
                }
              >
                {({ active, checked }) => (
                  <>
                    <div className="flex w-full items-center justify-between">
                      <div className="flex items-center">
                        <div className="text-sm">
                          <RadioGroup.Label
                            as="p"
                            className={`font-medium  ${
                              checked ? 'text-white' : 'text-primary'
                            }`}
                          >
                            {exp.company}
                          </RadioGroup.Label>
                          <RadioGroup.Description
                            as="span"
                            className={`inline ${
                              checked ? 'text-black' : 'text-gray-500'
                            }`}
                          >
                            <span>
                              {exp.from}
                            </span>{' '}
                            <span aria-hidden="true">&middot;</span>{' '}
                            <span>
                              {exp.to}
                            </span>{' '}
                          </RadioGroup.Description>
                        </div>
                      </div>
                      {checked && (
                        <div className="shrink-0 text-white">
                          <CheckIcon className="h-6 w-6" />
                        </div>
                      )}
                    </div>
                  </>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
    </div>
  )
}


function Description(props) {
  const {positions, company, url} = props.value;
  return (
    <div className="mx-auto w-full lg:max-w-base">{positions.map(p=>(
      <div className="mx-auto w-full">
        <div className="py-3">
          <h1 className="text-2xl font-bold ">
              <span className="block inline">{p.name}</span>{' '}
              <a href={url} target="_blank" className="text-primary sm:inline">@{company}</a>
          </h1>
          <div className="text-sm">
              <span>{p.from}</span>
              <span aria-hidden="true">&middot;</span>{' '}
              <span>{p.to}</span>
          </div>
        </div>
        {p.description.length > 0 && (
          <ul className="list-disc px-4">{p.description.map((d, index)=>(
            <li key={index} className="text-sm">{d}</li>
          ))}</ul>
        )}
      </div>
    ))}</div>
  )

}

function CheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
      <path
        d="M7 13l3 3 7-7"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}