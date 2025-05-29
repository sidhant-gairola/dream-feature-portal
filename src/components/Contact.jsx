import React, { useState } from "react";
import axios from "axios";

const Contact = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/contact", formData);
      alert("Message sent!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Something went wrong. Try again!");
    }
  };

  return (
    <div
      className={`py-20 flex items-center justify-center p-4 ${darkMode ? "bg-neutral-900 text-white" : "bg-gray-100 text-black"
        }`}
    >
      <div
        className={`p-8 rounded-lg shadow-md w-full max-w-md ${darkMode ? "bg-black text-white" : "bg-white text-black"
          }`}
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className={`w-full border rounded px-3 py-2 ${darkMode
                  ? "bg-neutral-800 text-white border-gray-600"
                  : "bg-white text-black border-gray-300"
                }`}
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={`w-full border rounded px-3 py-2 ${darkMode
                  ? "bg-neutral-800 text-white border-gray-600"
                  : "bg-white text-black border-gray-300"
                }`}
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className={`w-full border rounded px-3 py-2 ${darkMode
                  ? "bg-neutral-800 text-white border-gray-600"
                  : "bg-white text-black border-gray-300"
                }`}
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
