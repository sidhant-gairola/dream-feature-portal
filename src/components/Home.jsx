import React from 'react';
import { NavLink } from 'react-router-dom';
import Features from './Features';
import LiveIdeaWall from './LiveIdeaWall';

const Home = ({ darkMode, setDarkMode }) => {
    return (
        <div className={darkMode ? "bg-neutral-900 text-white" : "bg-white text-black"}>
            <section
                className={`${darkMode ? "bg-purple-900 text-white" : "bg-purple-100 text-black"
                    } text-center py-20 px-4`}
                id="home"
            >
                <h2 className="text-4xl font-bold mb-4">
                    Welcome to the Dream Feature Portal
                </h2>
                <p
                    className={`text-lg mb-6 ${darkMode ? "text-gray-300" : "text-gray-700"
                        }`}
                >
                    Where wild ideas meet real innovation.
                </p>
                <NavLink
                    to="/idea"
                    className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700 transition"
                >
                    Share Your Idea 💡
                </NavLink>
            </section>

            <Features darkMode={darkMode} setDarkMode={setDarkMode} />
            <LiveIdeaWall darkMode={darkMode} />
        </div>
    );
};

export default Home;
