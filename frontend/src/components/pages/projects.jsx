import React, { useState } from "react";
import luxuryVilla from "../../assets/luxuryVillaInterior.JPG";
import office from "../../assets/corporateOffice.JPG";
import HomeRenovation from "../../assets/homeRenovation.JPG";
import Boutique from "../../assets/boutiquestoredesign.JPG";


// Sample project data
const projects = [
  {
    id: 1,
    title: "Luxury Villa Interior",
    category: "Residential",
    image: luxuryVilla,
    description:
      "Modern interior design for a luxury villa with personalized furniture and lighting.",
  },
  {
    id: 2,
    title: "Corporate Office Renovation",
    category: "Commercial",
    image: office,
    description:
      "Complete office renovation focusing on productivity and modern aesthetics.",
  },
  {
    id: 3,
    title: "Boutique Store Design",
    category: "Commercial",
    image: Boutique,
    description:
      "A stylish retail store design combining branding and functional layout.",
  },
  {
    id: 4,
    title: "Home Renovation Project",
    category: "Renovation",
    image: HomeRenovation,
    description:
      "Renovation of a residential apartment to create open, modern living spaces.",
  },
];

const categories = ["All", "Residential", "Commercial", "Renovation"];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");

  // Filter projects by category
  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((proj) => proj.category === activeCategory);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Projects</h2>
        <p className="text-gray-600 mb-8">
          Explore our portfolio of completed projects across residential, commercial, and renovation spaces.
        </p>

        {/* Category Filter */}
        <div className="mb-12 flex justify-center gap-4 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full font-semibold transition ${
                activeCategory === cat
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-indigo-500 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              onClick={() => setSelectedProject(proj)}
              className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl transition hover:-translate-y-2"
            >
              <img
                src={proj.image}
                alt={proj.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {proj.title}
                </h3>
                <p className="text-sm text-gray-600">{proj.category}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Project Details */}
        {selectedProject && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-xl shadow-lg max-w-lg w-full p-6 relative">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-3 right-3 text-gray-600 hover:text-red-600"
              >
                ✖
              </button>
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h2 className="text-2xl font-bold mb-2">{selectedProject.title}</h2>
              <p className="text-gray-700 mb-4">{selectedProject.description}</p>
              <p className="text-sm text-gray-500">
                Category: {selectedProject.category}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
