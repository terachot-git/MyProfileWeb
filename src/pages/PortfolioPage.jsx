// Array to store project data
const projects = [
  {
    id: 1,
    title: "ChatZZZ",
    description: "A real-time role-playing chat application. Embody your favorite character and join topic-specific rooms for live conversations, complete with text and image sharing.",
    imageUrl: "https://res.cloudinary.com/denaxvdnw/image/upload/v1763036470/test_tjkt4o.png",
    links: {
      website:"https://chatzzz-gamma.vercel.app/",
      frontend: "https://github.com/terachot-git/ProjectChat",
      backend: "https://github.com/terachot-git/websocketApiChat",
    },
  },
    {
    id: 2,
    title: "Yak-Uad Community",
    description: "A web application for users to create and share spaces dedicated to their favorite things, such as pets, game characters, or anime.",
    imageUrl: "https://res.cloudinary.com/denaxvdnw/image/upload/v1755591996/%E0%B8%AA%E0%B8%81%E0%B8%A3%E0%B8%B5%E0%B8%99%E0%B8%8A%E0%B9%87%E0%B8%AD%E0%B8%95_2025-08-19_152549_tvkapj.png",
    links: {
      frontend: "https://github.com/terachot-git/ProjectCommu-Web",
      backend: "https://github.com/terachot-git/ProjectCommu-api",
    },
  },
  {
    id: 3,
    title: "HR Management System",
    description: "A web application designed for HR to manage time attendance issues. It automatically calculates check-in/out times against the leave system and includes an action log for transparency.",
    imageUrl: "https://res.cloudinary.com/denaxvdnw/image/upload/v1755593834/%E0%B8%AA%E0%B8%81%E0%B8%A3%E0%B8%B5%E0%B8%99%E0%B8%8A%E0%B9%87%E0%B8%AD%E0%B8%95_2025-08-19_155643_vmrna6.png",
    links: {
      frontend: "https://github.com/plaisamudcha/group-project-client",
      backend: "https://github.com/plaisamudcha/group-project-server",
    },
  },

];

const GitHubLink = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors"
  >
    {children}
  </a>
);


export const PortfolioPage = () => (
    <div className="space-y-12">
        <div className="p-8 bg-white rounded-2xl shadow-md">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Portfolio</h2>
        </div>

       
        <div className="space-y-16">
            {projects.map((project) => (
                <div key={project.id} className="p-8 bg-white rounded-2xl shadow-md flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/2 lg:w-3/5">
                        <a href={project.links.website||project.links.frontend} target="_blank" rel="noopener noreferrer" className="block group">
                           <img
                                src={project.imageUrl}
                                alt={`Screenshot of ${project.title}`}
                                className="w-full h-auto rounded-lg shadow-lg object-cover object-top transition-transform duration-300 group-hover:scale-105"
                            />
                        </a>
                    </div>

                    <div className="md:w-1/2 lg:w-2/5 flex flex-col">
                        <h3 className="text-2xl font-bold text-gray-800">{project.title}</h3>
                        <p className="text-gray-600 mt-2 flex-grow">{project.description}</p>
                        
                        <div className="mt-6 pt-4 border-t border-gray-200">
                            <h4 className="text-sm font-semibold text-gray-500 mb-3">Repositories:</h4>
                            <div className="flex items-center gap-4">
                                <GitHubLink href={project.links.frontend}>
                                    Frontend (GitHub)
                                </GitHubLink>
                                <GitHubLink href={project.links.backend}>
                                    Backend (GitHub)
                                </GitHubLink>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
);