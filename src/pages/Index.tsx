
import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";
import { Github, Linkedin, Mail } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="pt-24 pb-12 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-[#2A4365] mb-4">
              Hi, I'm Isaac Musinguzi
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              A passionate Web Designer, UI/UX Designer, and Graphics Designer creating awesome digital experiences.
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <a
                href="#contact"
                className="bg-[#ED3833] text-white px-6 py-3 rounded-md hover:bg-[#d63430] transition-colors duration-200"
              >
                Contact Me
              </a>
              <a
                href="#services"
                className="border-2 border-[#2A4365] text-[#2A4365] px-6 py-3 rounded-md hover:bg-[#2A4365] hover:text-white transition-colors duration-200"
              >
                View My Work
              </a>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-8 border-[#ED3833] overflow-hidden">
              <img
                src="/lovable-uploads/8718816a-f233-4e1d-adc6-cec7f2259dd9.png"
                alt="Isaac Musinguzi"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#2A4365] mb-12">My Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Web Design",
                description: "Creating responsive and modern websites that leave a lasting impression."
              },
              {
                title: "UI/UX Design",
                description: "Designing intuitive and user-friendly interfaces for exceptional user experiences."
              },
              {
                title: "Graphics Design",
                description: "Crafting visually stunning designs that communicate your brand's message."
              }
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
              >
                <h3 className="text-xl font-bold text-[#2A4365] mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#2A4365] mb-12">About Me</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gray-600 mb-8">
              I'm a dedicated designer based in Mbarara, Western Uganda, specializing in creating exceptional digital experiences. With expertise in web design, UI/UX design, and graphics design, I help businesses and individuals bring their visions to life.
            </p>
            <div className="flex justify-center space-x-6">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#ED3833]">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#ED3833]">
                <Linkedin size={24} />
              </a>
              <a href="mailto:isaacmusinguzi152@gmail.com" className="text-gray-600 hover:text-[#ED3833]">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-50">
        <ContactForm />
      </section>

      {/* Footer */}
      <footer className="bg-[#2A4365] text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Isaac Musinguzi. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
