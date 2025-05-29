import React from 'react';

const About = ({ darkMode }) => {
    return (
        <section className={`min-h-screen py-16 px-4 ${darkMode ? "bg-neutral-900 text-white" : "bg-gray-50 text-black"}`} id="about">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-purple-700 mb-4">About Us</h2>
                <p className="text-lg leading-relaxed mt-4">
                    DreamFeature is an internal innovation portal designed to capture the boldest and most creative ideas from within our team. Built as a MERN stack prototype, it empowers everyone—from developers to designers—to contribute features they’d love to see in our future products.
                </p>
                <p className="text-lg leading-relaxed mt-4">
                    With an intuitive submission form, a real-time idea wall, and a built-in ❤️ reaction system, DreamFeature is more than a tool—it's a movement to democratize innovation and foster a culture of creativity and collaboration.
                </p>
                <p className="text-lg leading-relaxed mt-4">
                    Whether it's a game-changing feature or a quirky add-on, every idea matters. Let's build the future together, one dream at a time.
                </p>
            </div>
        </section>
    );
};

export default About;
