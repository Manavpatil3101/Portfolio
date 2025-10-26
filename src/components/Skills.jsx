// components/Skills.jsx
const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Python", "JavaScript", "SQL"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Frameworks",
      skills: ["Django", "DRF", "Flask", "React.js", "Next.js"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Frontend",
      skills: ["Tailwind CSS", "Bootstrap", "HTML5", "CSS3"],
      color: "from-green-500 to-teal-500"
    },
    {
      title: "Tools",
      skills: ["Git", "Vercel", "Render"],
      color: "from-orange-500 to-red-500"
    }
  ];

  // Updated to return PNG icons from public/Icons folder
  const getSkillIcon = (skill) => {
    const icons = {
      Python: "/Icons/python.png",
      JavaScript: "/Icons/js.png",
      SQL: "/Icons/sql.png",
      Django: "/Icons/django.png",
      DRF: "/Icons/drf.png",
      Flask: "/Icons/flask.png",
      "React.js": "/Icons/react.png",
      "Next.js": "/Icons/nextjs.png",
      "Tailwind CSS": "/Icons/tailwindcss.png",
      Bootstrap: "/Icons/bootstrap.png",
      HTML5: "/Icons/html5.png",
      CSS3: "/Icons/css3.png",
      Git: "/Icons/git.png",
      Vercel: "/Icons/vercel.png",
      Render: "/Icons/render.png"
    };
    return icons[skill] || "/Icons/default.png";
  };

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12"
          data-aos="fade-up"
        >
          Skills & Technologies
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
            >
              <h3
                className={`text-lg font-semibold mb-4 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}
              >
                {category.title}
              </h3>
              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
                  >
                    <img
                      src={getSkillIcon(skill)}
                      alt={skill}
                      className="w-6 h-6 object-contain"
                    />
                    <span className="text-gray-700 font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
