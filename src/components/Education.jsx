const Education = () => {
  const education = [
    {
      degree: "Full Stack Web Development Course",
      institution: "Try Catch Institute, Borivali",
      year: "2024 - 2025"
    },
    {
      degree: "B.E. (Computer Engineering)",
      institution: "St. John College of Engineering and Management",
      details: "University of Mumbai",
      cgpa: "CGPA: 7.92",
      year: "2020 - 2024"
    }
  ];

  const achievements = [
    "Avishkar Inter-Collegiate Research Convention (Zonal Level) — represented college with technical project"
  ];

  return (
    <section id="education" className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-accent rounded-full"></div>
        <div className="absolute top-40 right-20 w-16 h-16 border-2 border-accent rotate-45"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 border-2 border-accent rounded-full"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2
          className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12"
          data-aos="fade-up"
        >
          Education & Achievements
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education Card */}
          <div
            data-aos="fade-right"
            className="bg-gradient-to-tr from-indigo-50 to-slate-50 rounded-3xl p-10 shadow-2xl border border-gray-100 hover:shadow-2xl transition-shadow duration-500"
          >
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
              Education
            </h3>
            <div className="flex flex-col gap-8">
              {education.map((edu, index) => (
                <div key={index} className="space-y-1">
                  <h4 className="text-xl font-semibold text-gray-800">{edu.degree}</h4>
                  <p className="text-gray-700 font-medium">{edu.institution}</p>
                  {edu.details && <p className="text-gray-600">{edu.details}</p>}
                  <div className="flex justify-between items-center text-sm text-gray-500 mt-1">
                    {edu.cgpa && <span className="text-accent font-bold">{edu.cgpa}</span>}
                    <span>{edu.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements Card */}
          <div
            data-aos="fade-left"
            className="bg-gradient-to-tr from-pink-50 to-purple-50 rounded-3xl p-10 shadow-2xl border border-gray-100 hover:shadow-2xl transition-shadow duration-500"
          >
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Achievements
            </h3>
            <ul className="flex flex-col gap-6 list-none">
              {achievements.map((achievement, index) => (
                <li key={index} className="flex items-start gap-4">
                  <span className="text-accent mt-1 text-lg">🏆</span>
                  <span className="text-gray-700 leading-relaxed">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
