import { Github, Mail, MapPin, Phone } from "lucide-react";

export const ProfilePage = () => (
  <div className="space-y-8">
    <div className="p-8 bg-white rounded-2xl shadow-md">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        <div className="w-40 h-40 rounded-full flex-shrink-0 border-4 border-white shadow-lg">
          <img
            className="w-full h-full object-cover rounded-full"
            src="https://res.cloudinary.com/denaxvdnw/image/upload/v1755590126/STV03723_dzos5b.jpg"
            alt="Profile picture of Terachot K."
          />
        </div>
        <div className="text-center md:text-left flex-grow">
          <h1 className="text-2xl font-bold text-gray-800">
            Terachot Kongcharoenwattanakul (WIN)
          </h1>
          <p className="text-xl text-gray-600 mt-1">Fullstack Developer</p>
          <p className="text-gray-600 leading-relaxed mt-4 border-t pt-4">
            A creative problem-solver transitioning from a successful 5-year
            career in 3D visual effects to Fullstack Development...
          </p>
        </div>
      </div>
    </div>
    <div className="flex flex-col lg:flex-row gap-8">
      <div className="w-full lg:w-2/3 p-8 bg-white rounded-2xl shadow-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">
          Contact
        </h2>
        <div className="space-y-4 text-gray-600">
          <div className="flex items-center">
            <Phone className="w-5 h-5 mr-3 text-gray-400" />
            <span>089-4858557</span>
          </div>
          <div className="flex items-center">
            <Mail className="w-5 h-5 mr-3 text-gray-400" />
            <span>terachotdev@gmail.com</span>
          </div>
          <div className="flex items-center">
            <MapPin className="w-5 h-5 mr-3 text-gray-400" />
            <span>Phanthai Norasing, Samut Sakhon</span>
          </div>
          <a
            href="https://github.com/terachot-git"
            target="_blank"
            rel="noopener noreferrer" 
            className="flex items-center  hover:text-blue-500 transition-colors duration-200"
          >
            <Github className="w-5 h-5 mr-3 text-gray-400" />
            <span>terachot-git</span>
          </a>
        </div>
      </div>
      <div className="w-full lg:w-2/3 p-8 bg-white rounded-2xl shadow-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">
          Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-md font-semibold text-gray-700 mb-3">
              Technical Skills
            </h3>
            <ul className="space-y-2">
              {[
                "REACT NEXT",
                "JAVASCRIPT TYPESCRIPT",
                "HTML / CSS",
                "NodeJS / EXPRESS",
                "MySQL Prisma",
                "Figma / Canva",
                "3D Camera & Object Tracking",
              ].map((skill) => (
                <li key={skill} className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-md font-semibold text-gray-700 mb-3">
              Core Competencies
            </h3>
            <ul className="space-y-2">
              {[
                "Fast Learner",
                "Team Collaboration",
                "Adaptability",
                "Works Well Under Pressure",
              ].map((skill) => (
                <li key={skill} className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);
