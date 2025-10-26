// components/Contact.jsx
// Component inspired by Kevin Levron:
// https://x.com/soju22/status/1858925191671271801

import Ballpit from './Ballpit';

const Contact = () => {
  const contactMethods = [
    {
      icon: "/Icons/email.png",
      label: "Email",
      value: "manavpatil3101@gmail.com",
      link: "mailto:manavpatil3101@gmail.com",
    },
    {
      icon: "/Icons/phone.png",
      label: "Phone",
      value: "+91 70589 37559",
      link: "tel:+917058937559",
    },
    {
      icon: "/Icons/linkedin.png",
      label: "LinkedIn",
      value: "linkedin.com/in/manav-patil31",
      link: "https://linkedin.com/in/manav-patil31",
    },
  ];

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-20 bg-slate-50"
    >
      {/* Ballpit background */}
      <div
        className="absolute inset-0 z-0 hidden lg:block"
        style={{ position: "absolute", overflow: "hidden" }}
      >
        <Ballpit
          count={60}
          gravity={0.1}
          friction={0.997}
          wallBounce={0.95}
          followCursor={false}
        />
      </div>

      {/* Optional gradient overlays for subtle depth */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-indigo-200 to-purple-200 rounded-full blur-3xl opacity-20 z-0"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-br from-cyan-200 to-blue-200 rounded-full blur-3xl opacity-20 z-0"></div>

      {/* Foreground content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2
          className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4"
          data-aos="fade-up"
        >
          Let's Connect
        </h2>
        <p
          className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Feel free to reach out for collaborations or just a friendly hello
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {contactMethods.map((method, index) => {
            const content = (
              <div
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="group bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-accent/20 text-center"
              >
                <div className="flex justify-center mb-4">
                  <img
                    src={method.icon}
                    alt={method.label}
                    className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {method.label}
                </h3>
                <p className="text-gray-600 group-hover:text-accent transition-colors duration-300">
                  {method.value}
                </p>
              </div>
            );

            // Only make LinkedIn clickable
            return method.label === "LinkedIn" ? (
              <a
                key={method.label}
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {content}
              </a>
            ) : (
              <div key={method.label}>{content}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contact;
