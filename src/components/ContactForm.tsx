
import { useState } from 'react';
import { toast } from "@/components/ui/sonner";
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    console.log('Form submitted:', formData);
    toast.success("Message sent successfully!");
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto px-4 py-12">
      <div>
        <h2 className="text-3xl font-bold text-[#2A4365] mb-6">Contact Me</h2>
        <p className="text-gray-600 mb-8">
          Feel free to reach out for any inquiries about web design, graphics design, or UI/UX projects.
        </p>
        
        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <Phone className="text-[#ED3833]" />
            <div>
              <p className="font-semibold">Phone</p>
              <p className="text-gray-600">+256 764 194 627</p>
              <p className="text-gray-600">+256 752 661 674</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <Mail className="text-[#ED3833]" />
            <div>
              <p className="font-semibold">Email</p>
              <p className="text-gray-600">isaacmusinguzi152@gmail.com</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <MapPin className="text-[#ED3833]" />
            <div>
              <p className="font-semibold">Location</p>
              <p className="text-gray-600">Mbarara, Western Uganda</p>
            </div>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#63B3ED] focus:border-transparent"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#63B3ED] focus:border-transparent"
          />
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#63B3ED] focus:border-transparent"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#ED3833] text-white py-2 px-6 rounded-md hover:bg-[#d63430] transition-colors duration-200"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
