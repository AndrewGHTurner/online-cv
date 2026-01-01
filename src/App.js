import './App.css';
import { useState } from 'react';
import Heading from './heading';
import Section from './Section';
import lancasterLogo from './lancaster.png';
import kingsLogo from './kcl.png';

const contactDetails = {
  name: "Andrew Turner",
  phone: "(+44) 7511 670719",
  email: "andrew.turner.software@gmail.com",
  github: "https://github.com/AndrewGHTurner",
  linkedIn: "https://www.linkedin.com/in/andrew-turner-517455232/"
};

const personalStatement = {
  title: "Personal Statement",
  content: "Motivated software engineer holding an MSc in Advanced Software Engineering at King’s College London, where I studied topics including technology in financial systems and security and test driven development. I also have prior industry experience as a Graduate Software Engineer at Forsberg Services Ltd. There, I contributed to full-stack development using C++, TypeScript, and Vue 3 in an agile team environment. I bring strong problem-solving ability, adaptability across technologies, and motivation to contribute to creating maintainable, high-quality software. Immediately available for software engineer roles in London."
}

const technicalSkills = {
  title: "Other Technical Skills",
  content: ["Test Driven Development (TDD) experience gained through MSc modules and personal projects, using frameworks such as Junit and MSTest.",
    "Knowledge of SQL and database normalisation principles, gained through academic projects and personal study.",
    "Strong understanding of data structures and algorithms, including time and space complexity analysis.",
    "SOLID principles and design patterns applied in various projects to create maintainable and scalable codebases."
  ]
}

const nonTechnicalSkills = {
  title: "Non-Technical Skills",
  content: ["Professional Agile team working experience as a Graduate Software Engineer at Forsberg Services Ltd.",
    "Proactive learner who is self motivated to improve skills and always open to learning new technologies.",
    "Collaborated in non-technical team environments, such as the housekeeping team at Capernwray College, developing strong communication and teamwork skills."]
}

const intrests = {
  title: "Interests",
  content: "In my free time I enjoy working out at the gym, especially with friends. If I have a free day, I enjoy hosting friends for a meal and maybe some boardgames. I continue to work on personal coding projects including a C++ UI library as well as explore new technologies and frameworks that may be relevant to my career. Lastly, to wind down, I read interesting books with a cup of tea."
}

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (

    <div className="flex justify-center min-h-screen App bg-slate-100 dark:bg-slate-900">
      <div className="w-full mx-auto md:w-3/4">
        <div className={` bg-slate-100 dark:bg-slate-900 min-h-screen`}>
          <button className="p-2 m-4 rounded dark-toggle bg-slate-300" onClick={() => {
            const newDark = !darkMode;
            setDarkMode(newDark);
            document.documentElement.classList.toggle("dark", newDark);
          }}>
            Toggle Dark Mode
          </button>
          <Heading {...contactDetails} />
          <Section {...personalStatement} />
          <div className="section">
            <p className="title">Skills at a glance</p>
            <p className="text-2xl title">Frontend</p>
            <div className="grid grid-cols-1 text-sm md:grid-cols-3">
              <div>
                <h3 className="font-semibold text-sky-900 dark:text-sky-500 text-opacity-80 font">Languages</h3>
                <p className="text-xl font-bold">JavaScript, TypeScript, HTML</p>
              </div>
              <div>
                <h3 className="font-semibold text-sky-900 dark:text-sky-500 text-opacity-80 font">Frameworks</h3>
                <p className="text-xl font-bold">Vue 3, React</p>
              </div>

              <div>
                <h3 className="font-semibold text-sky-900 dark:text-sky-500 text-opacity-80 font">Styling</h3>
                <p className="text-xl font-bold">CSS, Tailwind, Bootstrap</p>
              </div>
            </div>
            <hr className='m-2 border-sky-900'></hr>
            <p className="text-2xl title">Backend</p>
            <div className="grid grid-cols-1 text-sm md:grid-cols-3">
              <div>
                <h3 className="font-semibold text-sky-900 dark:text-sky-500 text-opacity-80 font">Languages</h3>
                <p className="text-xl font-bold">C++, Python, SQL</p>
              </div>

              <div>
                <h3 className="font-semibold text-sky-900 dark:text-sky-500 text-opacity-80 font">Libraries</h3>
                <p className="text-xl font-bold">SQLite, QT, STL</p>
              </div>

              <div>
                <h3 className="font-semibold text-sky-900 dark:text-sky-500 text-opacity-80 font">Tools</h3>
                <p className="text-xl font-bold">Git, Doxygen</p>
              </div>
            </div>

          </div>
          {/* Education */}
          <div className="section">
            <h2 className="title">Education</h2>
            <div className="space-y-4">
              <div className="p-4 rounded-lg shadow-sm dark:shadow-yellow-200 bg-sky-50 dark:bg-sky-950">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div>
                    <p className="text-lg font-bold">King's College London</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">MSc Advanced Software Engineering</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">2024 - 2025</p>
                  </div>
                  <img
                    src={kingsLogo}
                    alt="King's College London Logo"
                    className="w-32 h-auto mt-2 rounded-lg md:mt-4"
                  />
                </div>

              </div>
              <div className="p-4 rounded-lg shadow-sm dark:shadow-yellow-200 bg-sky-50 dark:bg-sky-950">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div>
                    <p className="text-lg font-bold">Lancaster University</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">BSc Computer Science</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">2020 - 2023</p>
                  </div>
                  <img
                    src={lancasterLogo}
                    alt="Lancaster University Logo"
                    className="h-20 mt-2 bg-blue-100 rounded-lg md:mt-4 dark:bg-sky-900"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Past Experience in tech*/}
          <div className="section">
            <p className="title">Previous Experience in Tech</p>
            <div className="text-md">
              <p>Forsberg Services Ltd (now Teleplan Forsberg)</p>
              <p className="text-sm text-gray-700 dark:text-gray-300">Graduate Software Engineer </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">December 2023 - April 2024</p>
              <p className="p-4 rounded-lg shadow-md bg-sky-50 dark:bg-sky-950">
                Worked within an Agile software team primarily using Vue 3 with Typescript and C++. Liased with project manager to turn figma
                designs into high quality user interfaces. Contributed to backend C++ codebase adding new features and fixing bugs. Generated testing data using Python scripts.
              </p>
              <p className="title">Skills used:</p>
              <ul className="skills">
                <li>TypeScript</li>
                <li>Vue 3</li>
                <li>ScSS</li>
                <li>Bootstrap 5</li>
                <li>C++</li>
                <li>git</li>
                <li>Agile Methodologies</li>
                <li>Python</li>
              </ul>
            </div>
          </div>
          {/* projects */}
          <div className="section">
            <p className="title">Projects</p>
            <div className="p-2 m-4 rounded-lg shadow-md bg-sky-50 dark:bg-sky-950">
              <p className="title">C++ UI library</p>
              <p>Lightweight, retained-mode, and extensible UI library (C++17, SFML). Designed with an extensible architecture and a fluent API
                for faster UI development. Contains various layout and widgets such as button, checkboxes and textboxes. Thought was given to memory layout, object size and scalability. For example, centralised event dispatch allows every UI tree node to have any type of interractivity without increasing object instance size by mapping node IDs to callbacks if they exist. </p>
              <p className="title">Skills used:</p>
              <ul className="skills">
                <li>C++17 + STL</li>
                <li>Design Patterns</li>
                <li>OOP</li>
                <li>DLL creation</li>
                <li>Visual Studio 2022</li>
                <li>Fluent API design</li>
                <li>Smart Pointers/memory management</li>
                <li>Doxygen</li>
                <li>Data Structures and Algorithms</li>
              </ul>
            </div>



            <div className="p-2 m-4 rounded-lg shadow-md bg-sky-50 dark:bg-sky-950">
              <p className="title">MSc dissertation</p>
              <p>Conducted in the area of AI research. I developed novel methods to improve performance of discrete action planning with state roadmaps by leveraging domain spcific heuristics to prevent overcommitment to roadmap states. This project required independent work and problem solving. For example, I developed a scalable planner algorithm visualisation tool in Python that fascilitated quick debugging and fast prototyping. Visualisation is also invaluable for convaying how an algorithm behaves and providing intuition. </p>
              <p className="title">Skills used:</p>
              <ul className="skills">
                <li>Python</li>
                <li>Software Architecture</li>
                <li>Algorithm Design</li>
              </ul>
            </div>



            <div className="p-2 m-4 rounded-lg shadow-md bg-sky-50 dark:bg-sky-950">
              <p className="title">Revision System</p>
              <p>Multi-page CRUD revision system written in Python using the QT UI library and SQLite. Users can create lists of questions and sublists for targeted revision (question lists make a tree structure). For revision it acts as a flashcard system and records the user's "streak" for correct answers to prioritise how soon questions should be asked again. </p>
              <p>This is a program I have iterated on many times as, given I know the structure and design, it is a nice project for learning knew frameworks. For example, I have implemented versions of this application using C++, JavaScript, MySql and my own C++ UI library.</p>
              <p className="title">Skills used:</p>
              <ul className="skills">
                <li>Python</li>
                <li>SQLite</li>
                <li>QT</li>
                <li>SQL</li>
                <li>Database Design</li>
              </ul>
            </div>

          </div>



          {/* non-tech and volunteer experience */}
          <div className="section">
            <p className="title">Non-tech and volunteer experience</p>
            <div  className="p-2 m-4 rounded-lg shadow-md bg-sky-50 dark:bg-sky-950">
              <p className="title">Big Bears Pizza - Pizza Maker</p>
              <p>
                Worked closely in a small team ensuring I followed strict food hygiene standards and maintaining a clean and organised workplace.
              </p>
            </div>
            <div  className="p-2 m-4 rounded-lg shadow-md bg-sky-50 dark:bg-sky-950">
              <p className="title">Capernwray Hall - Volunteer house keeping</p>
              <p>
                Provided a friendly face in welcoming guests and responding to ad hoc guest queries. Worked in a team to maintain public spaces and rooms to ensure that the guests had everything they needed to enjoy their stay.
              </p>
            </div>
            <div  className="p-2 m-4 rounded-lg shadow-md bg-sky-50 dark:bg-sky-950">
              <p className="title">Charity shop Volunteer - Back of House Sorter</p>
              <p>
                Sorted donated items including clothes, books, and bric-a-brac to ensure that only high-quality items were placed on the shop floor for sale. Worked as part of a team to maintain a clean and organised back of house area. I have volunteered at Age UK and Age Concern charity shops.
              </p>
            </div>
          </div>
          <Section {...technicalSkills} />
          <Section {...nonTechnicalSkills} />
          <Section {...intrests} />
        </div>

      </div>
    </div >
  );
}

export default App;
