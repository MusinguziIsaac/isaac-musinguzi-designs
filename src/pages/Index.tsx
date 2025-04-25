import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";
import { Facebook, Instagram, Linkedin } from "lucide-react";

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

      {/* Skills Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#2A4365] mb-12">My Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-[#2A4365] mb-4">Web Development</h3>
              <ul className="space-y-2 text-gray-600">
                <li>HTML5 & CSS3</li>
                <li>JavaScript/TypeScript</li>
                <li>React.js</li>
                <li>Responsive Design</li>
                <li>TailwindCSS</li>
              </ul>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-[#2A4365] mb-4">UI/UX Design</h3>
              <ul className="space-y-2 text-gray-600">
                <li>User Research</li>
                <li>Wireframing</li>
                <li>Prototyping</li>
                <li>User Testing</li>
                <li>Design Systems</li>
              </ul>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-[#2A4365] mb-4">Graphics Design</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Logo Design</li>
                <li>Brand Identity</li>
                <li>Print Design</li>
                <li>Social Media Graphics</li>
                <li>Marketing Materials</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#2A4365] mb-12">My Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
              <div className="mb-6 text-[#ED3833]">
                <Code size={40} />
              </div>
              <h3 className="text-xl font-bold text-[#2A4365] mb-4">Web Design</h3>
              <p className="text-gray-600 mb-4">Creating responsive and modern websites that leave a lasting impression.</p>
              <ul className="text-gray-600 space-y-2">
                <li>• Custom Website Development</li>
                <li>• Mobile-First Design</li>
                <li>• Performance Optimization</li>
                <li>• SEO-Friendly Structure</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
              <div className="mb-6 text-[#ED3833]">
                <Layout size={40} />
              </div>
              <h3 className="text-xl font-bold text-[#2A4365] mb-4">UI/UX Design</h3>
              <p className="text-gray-600 mb-4">Designing intuitive and user-friendly interfaces for exceptional user experiences.</p>
              <ul className="text-gray-600 space-y-2">
                <li>• User Interface Design</li>
                <li>• User Experience Design</li>
                <li>• Interactive Prototypes</li>
                <li>• Usability Testing</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
              <div className="mb-6 text-[#ED3833]">
                <PenTool size={40} />
              </div>
              <h3 className="text-xl font-bold text-[#2A4365] mb-4">Graphics Design</h3>
              <p className="text-gray-600 mb-4">Crafting visually stunning designs that communicate your brand's message.</p>
              <ul className="text-gray-600 space-y-2">
                <li>• Brand Identity Design</li>
                <li>• Marketing Materials</li>
                <li>• Social Media Graphics</li>
                <li>• Print Design Solutions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#2A4365] mb-12">About Me</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              I'm a dedicated designer based in Mbarara, Western Uganda, with a passion for creating exceptional digital experiences. With expertise in web design, UI/UX design, and graphics design, I help businesses and individuals bring their visions to life through creative and innovative solutions.
            </p>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              My approach combines creativity with functionality, ensuring that every project not only looks beautiful but also delivers results. Whether you need a stunning website, an intuitive user interface, or eye-catching graphics, I'm here to help you achieve your goals.
            </p>
            <div className="flex justify-center space-x-6">
              <a 
                href="https://wa.me/256764194627" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-green-600 hover:text-green-700 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </a>
              <a 
                href="https://www.facebook.com/isaac.musinguzi.777" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-600 hover:text-blue-700 transition-colors"
              >
                <Facebook size={24} />
              </a>
              <a 
                href="https://www.tiktok.com/@yourusername" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-black hover:text-gray-700 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-music">
                  <path d="M9 18V5l12-2v13"/><path d="m9 9 12-2"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>
              </a>
              <a 
                href="https://www.instagram.com/yourusername" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-pink-600 hover:text-pink-700 transition-colors"
              >
                <Instagram size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/in/isaac-musinguzi" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-800 hover:text-blue-900 transition-colors"
              >
                <Linkedin size={24} />
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
