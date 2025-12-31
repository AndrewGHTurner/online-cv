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
  content: "Motivated software engineer holding an MSc in Advanced Software Engineering at King’s College London, where I studied topics including technology in financial systems and security. I also have prior industry experience as a Graduate Software Engineer at Forsberg Services Ltd. There, I contributed to full-stack development using C++, TypeScript, and Vue 3 in an agile team environment. I bring strong problem-solving ability, adaptability across technologies, and motivation to contribute to creating maintainable, high-quality software. Immediately available for software engineer roles in London."
}

const technicalSkills = {
  title: "Technical Skills",
  content: ["Professional version control experience using git and GitHub.",
    "Front end development experience using Vue 3, Electron js, TypeScript, SCSS, and Bootstrap among other technologies.",
    ["C++ development experience including:\nDeveloped modular C++ applications on Windows by creating custom dynamic-link libraries (DLLs) to separate reusable components.", "Utilised Doxygen to generate clear and maintainable API documentation.", "Managed multi-project solutions in Microsoft Visual Studio integrating shared libraries and ensuring smooth builds."],
    "Familiarity with SQL and database normalization principles",
    "Experience with Python at Forsberg Services, within dissertation project, and other personal projects.",
    "Familiarity with using CSS libraries Bootstrap 5 and Tailwind CSS to create consistent user interfaces.",
    "String knowledge of data structures and algorithms.",
    "Familiarity with Test Driven Development(TDD)"]
}

const Projects = {
  title: "Projects",
  content: ["Lightweight, data-driven, retained-mode, and extensible UI library (C++17, SFML)",
    ["Designed and implemented a modular UI library demonstrating clean architectural design and robust event handling.",
      "Developed user friendly APIs using the facade, fluent, and builder patterns to accelerate UI development.",
      "Ensured memory safety through the use of standard library smart pointers.",
      "Implemented change notification propagation, via the observer pattern, up the UI hierarchy to efficiently manage redraws and state updates.",
      "Optimized memory and performance: minimized UI tree node size using bit flags and designed a dirty-flag system to reduce re-computation to the minimal necessary."],
    "Multi-page revision system written in Python using the QT UI library and SQLite.",
    ["Allows users to create lists of questions and their answers.",
      "Lists of lists can be made allowing for general or more targeted revision.",
      "System for recording progress and asking the user questions they are more likely to need to revise.",
      "All data stored within an SQLite database"],
    "MSc dissertation project exploring algorithms for discrete action planning using state roadmaps.",
    ["Graphical application developed in Python with PyGame to allow for visualisation of the developed algorithms. Visualisation allowed for fast debugging, iteration and ease of intuition for how the algorithms behaved.",
      "Developed five new algorithms"]]
}

const nonTechnicalSkills = {
  title: "Non-Technical Skills",
  content: ["Professional Agile team working experience as a Graduate Software Engineer at Forsberg Services Ltd.",
    "Proactive learner who is self motivated to improve skills and always open to learning new technologies.",
    "Collaborated in non-technical team environments, such as the housekeeping team at Capernwray College, developing strong communication and teamwork skills."]
}

const workingExperience = {
  title: "Work Experience",
  content: ["Capernwray Hall (volunteer) August 5 2024– September 10 2024\n",
    ["Provided a friendly face in welcoming guests and responding to ad hoc guest queries.",
      "Worked in a team to maintain public spaces and rooms to ensure that the guests had everything they needed to enjoy their stay."],
    "Forsberg Services Ltd December 1 2023—April 28 2024\n",
    ["Full time Graduate Software Engineer working mainly in Vue 3, Typescript, and C++.",
      "Actively contributed to large-scale commercial projects, demonstrating a professional aptitude for collaborative software development.",
      "Created high quality user interfaces using Typescript, Vue 3, SCSS, and Bootstrap.",
      "Contributed to adding features to C++ backend."],
    "Big Bears Pizza February 2023 – November 2023\n",
    ["Strong multi-tasking skills in preparing fresh high quality pizzas ensuring consistency in taste and presentation in a fast paced environment.",
      "Worked closely in a small team ensuring I followed strict food hygiene standards and maintaining a clean and organised workplace."]]
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
                <p className="text-xl font-bold">CSS, Tailwind CSS, Bootstrap</p>
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
              <div className="p-4 rounded-lg shadow-md bg-sky-50 dark:bg-sky-950">
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
              <div className="p-4 rounded-lg shadow-md bg-sky-50 dark:bg-sky-950">
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
          <Section {...technicalSkills} />
          <Section {...Projects} />
          <Section {...nonTechnicalSkills} />
          <Section {...workingExperience} />
          <Section {...intrests} />
        </div>
        <a
          href={`mailto:${contactDetails.email}`}
          className="inline-block px-4 py-2 text-white transition bg-indigo-600 rounded-lg hover:bg-indigo-700"
        >
          Email Me
        </a>
      </div>
    </div >
  );
}

export default App;
