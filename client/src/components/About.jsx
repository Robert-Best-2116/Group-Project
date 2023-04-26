
import { Link } from 'react-router-dom';

const team = [
    {
        name: 'Robert Best',
        role: 'Project Lead',
        imageUrl: './img/1.jpg',
        bio: 'As Project Lead, I have to say that I am grateful to have such a quality team. Every member performed to the best of their ability, completed their contribution in a timely manner, and communicated with the group excellently. I could not have been more lucky. If you have questions about their quality of work, their drive, or dedication to the team and the task at hand, please reach out to me via LinkedIn. Everyone of them will be an asset. For my contribution as project lead, I created the initial idea, along with a detailed wireframe and text overview. Going into the specifics for naming contentions, the induvial components descriptions as well as a detailed list for front and backend routes, model names, and the assignment of roles. During the building of the application I assisted with debugging, version control, code review, and the overall networking of the team.',
        bioTwo: 'Personally I have worked as an office manager for a small engine repair shop, a department lead for Fred Myers (Kroger) and am currently an assistant manager for WSCO Petroleum.  I greatly enjoyed working with react and having the opportunity to work with such a fine team. I am looking to continue my journey working with full stack react applications where ever a good challenge arises. ',
        linkedinUrl: 'https://www.linkedin.com/in/robert-a-best/',
        githubUrl: 'https://github.com/Robert-Best-2116',
    },
    {
        name: 'Katie Innes',
        role: 'Back-End Development',
        imageUrl: './img/2.jpg',
        bio: `Using Robert's detailed wireframe, I kicked off the project, creating the server side of the application. After writing the code for the config, controller, model, and route files I tested it all in Postman to ensure the CRUD functions worked and to add some sample entries to the Mongo database.`,
        bioTwo: `I've worked in a variety of industries—theatre, elementary education, non-profit and for-profit marketing, and health tech—but it is that last one that sparked my interest in learning to code. I got a taste of QA work, helping to debug my company's websites on the front end, but now I'd like to use my full-stack engineering skills to become a QA engineer.`,
        linkedinUrl: 'https://www.linkedin.com/in/katharineinnes/',
        githubUrl: 'https://www.github.com/katieinnes',
    },
    {
        name: 'Jordan Graham',
        role: 'CSS/Styling',
        imageUrl: './img/3.png',
        bio: 'My task in the project was to build the dashboard, view page, landing page, as well as do overall styling of the application using Tailwind CSS. The dashboard is where you will be able to view cards that display a small amount of info on every application you add and click various buttons in the side bar that will help you naviagte to other pages in the site. Then every card has a view job listing button that will take you to a full detailed run down of the job you sent your application to.',
        bioTwo: 'My coding journey began in January 2021, where I began to teach myself basic front-end development on YouTube and Udemy, previous to that I had worked as a metal fabricator. From there I began to learn what was widely used in the industry such as React/Next.JS, Tailwind CSS, SASS, etc., which led me to the opportunity to land some small front-end specific freelance jobs. Then I began learning things I could offer to projects such as Three.JS and 3D Design with Blender and Spline. I would really like to find jobs where I can use my new full-stack skill sets in either the MERN or Python languages and continue learning the new and latest cool things I can apply to the front-end of applications I work on.',
        linkedinUrl: 'https://www.linkedin.com/in/jgwebdev38/',
        githubUrl: 'https://github.com/jgrahamwebdev',
    },
    {
        name: 'Brittany Lystrup',
        role: 'Login and Registration',
        imageUrl: './img/4.jpg',
        bio: `I took on the login and registration piece, not really realizing how much of a task I had agreed to take on. I got to learn completely new code and libraries/dependencies, such as cookie-parser, .env, and jsonwebtoken, while also learning some familiar code but specifically for Express/Node, such as using bcrypt. My biggrest challenge of the whole task was figuring out how to utilize the user's info within the application once they are registered/logged in (I have been coding in my dreams this past week trying to figure it out).`,
        bioTwo: `My fun fact I always use is that I worked at an amusement park in southern California as a costume character for several summers in college, typically as Bugs Bunny or Wile E Coyote. Other than that, I have worked just about every front of house position in restaurants. And for the last 9 years, I have worked for Nordstrom Corporate, most recently as a Product Developer for Young Adult Women's Apparel. I am looking for a full time gig, either remote or hybrid, at a company that values its employees and a healthy work life balance. And also pays well so that I can actually buy a house in the Seattle market.`,
        linkedinUrl: 'https://www.linkedin.com/in/brittany-lystrup/',
        githubUrl: 'https://github.com/BLystrup',
    },
    {
        name: 'Alex Konnaris',
        role: 'Front-End Development',
        imageUrl: './img/5.jpg',
        bio: `Based on the wireframe that Robert designed, I created a create and edit form on the front end of our project using state values and axios requests. These forms allowed us to add and edit applications in our database. I also displayed validations from the backend which were made by Katie and I made part of the form render conditionally because some of the inputs are optional.`,
        bioTwo: `I'm from NYC born and raised and I've worked in the warehouse/shipping industry for 2+ years. I discovered my passion for programming during the pandemic and I'm working towards a career in fintech because I believe I can learn more about managing money and making good investments. I hope to open a business one day but I'm also open to working in many different fields of tech that way I can meet lots of people and learn new things.`,
        linkedinUrl: 'https://www.linkedin.com/in/alexander-konnaris-6044a1220/',
        githubUrl: 'https://github.com/alexkonnaris',
    },
]

const About = () => {
    return (
        <div className="bg-white py-8 md:py-12">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-5">
            
            <div className="max-w-2xl xl:col-span-2 shadow-md py-4 md:py-0 px-4 rounded">
                <img className='hidden md:block mb-4 md:w-full w-full h-auto m-auto' src='/img/resume2.png' />
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">About our team</h2>
                <p className="mt-6 text-lg leading-8 text-gray-600">Application Tracker was created as the group project component for the final class of Coding Dojo's full stack engineering program.</p>
                <div className='w-full flex items-center justify-end md:justify-start mt-4'>
                    <Link to={'/dashboard'}><button type="button" className="transition ease-in-out delay-100 inline-flex items-center rounded-md bg-[#2ECC40af] px-3 py-2 text-sm text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-[#2ECC40] hover:text-[#fff] hover:-translate-y-1 hover:scale-110">&larr; Home</button></Link>
                </div>
            </div>

            
            <ul role="list" className="-mt-12 space-y-12 divide-y divide-[#2ECC40] xl:col-span-3">
            {team.map((member) => (
            <li key={member.name} className="flex flex-col gap-10 pt-12 sm:flex-row">
            <div>
                <img className="aspect-[4/5] w-52 flex-none rounded-2xl object-cover" src={member.imageUrl} alt="" />
                <h4 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">{member.name}</h4>
                <p className="text-base leading-7 text-[#25a734]">{member.role}</p>
                <p className="mt-6 text-base leading-7 text-gray-600">{member.bio}</p>
                <p className="mt-6 text-base leading-7 text-gray-600">{member.bioTwo}</p>

                <ul role="list" className="mt-6 flex gap-x-6">
                  <li>
                    <a href={member.githubUrl} className="text-gray-400 hover:text-[#2ECC40]">
                      <span className="sr-only">GitHub</span>
                      <svg className="h-7 w-7" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href={member.linkedinUrl} className="text-gray-400 hover:text-[#2ECC40]">
                      <span className="sr-only">LinkedIn</span>
                      <svg className="h-[1.35rem] w-[1.35rem]" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>

            </div>
            </li>
             ))}
            </ul>
        </div>
        </div>
    )
}

export default About
