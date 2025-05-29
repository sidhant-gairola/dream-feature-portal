const Features = ({ darkMode, setDarkMode }) => {
    return (
        <div className={darkMode ? "bg-neutral-900 text-white" : "bg-white text-black"}>
            <section className={`py-16 ${darkMode ? "bg-neutral-900" : "bg-white"}`} id="wall">
                <div className="text-center mb-12">
                    <h3 className={`text-3xl font-bold ${darkMode ? "text-white" : "text-gray-800"}`}>
                        How It Works
                    </h3>
                    <p className={`mt-2 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                        Empowering teams to shape the future together
                    </p>
                </div>
                <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-4">
                    {[
                        {
                            title: "Submit Ideas",
                            description: "Pitch your dream features with just a few clicks.",
                        },
                        {
                            title: "Live Idea Wall",
                            description: "Explore everyone’s ideas in real-time.",
                        },
                        {
                            title: "React with ❤️",
                            description: "Show love to the best ideas using likes.",
                        },
                    ].map((feature, index) => (
                        <div
                            key={index}
                            className={`p-6 rounded shadow text-center hover:scale-105 transition duration-300 ${darkMode ? "bg-neutral-800 text-white" : "bg-gray-100 text-black"
                                }`}
                        >
                            <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
                            <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Features;
