import React, { useEffect, useState } from "react";
import axios from "axios";
import { format } from "timeago.js";

const LiveIdeaWall = ({ darkMode }) => {
    const [ideas, setIdeas] = useState([]);

    const baseURL = import.meta.env.VITE_API_URL;

    useEffect(() => {
        if (!localStorage.getItem("userId")) {
            localStorage.setItem("userId", crypto.randomUUID());
        }
    }, []);

    const fetchIdeas = async () => {
        try {
            const res = await axios.get(`${baseURL}/api/ideas`);
            setIdeas(res.data);
        } catch (error) {
            console.error("Failed to fetch ideas:", error);
        }
    };

    useEffect(() => {
        fetchIdeas();
        const interval = setInterval(fetchIdeas, 5000);
        return () => clearInterval(interval);
    }, []);

    const handleLike = async (id) => {
        const userId = localStorage.getItem("userId") || "anonymous";
        try {
            await axios.post(`${baseURL}/api/ideas/${id}/like`, {
                userId,
            });
            fetchIdeas();
        } catch (error) {
            if (error.response?.data?.message) {
                alert(error.response.data.message);
            } else {
                console.error("Error liking idea:", error);
            }
        }
    };

    return (
        <section
            className={`p-6 rounded-lg shadow-md max-w-4xl mx-auto ${darkMode ? "bg-neutral-900 text-white" : "bg-white text-black"
                }`}
        >
            <h3 className="text-2xl font-bold mb-4">Live Wall of Ideas</h3>
            {ideas.length === 0 ? (
                <p>No ideas submitted yet.</p>
            ) : (
                <ul>
                    {ideas
                        .sort((a, b) => b.likes - a.likes)
                        .map(({ _id, name, title, description, likes, createdAt, category, mood }) => (
                            <li
                                key={_id}
                                className={`rounded p-4 mb-4 transition border shadow-sm hover:shadow-md ${darkMode
                                    ? "bg-neutral-800 border-neutral-700 text-gray-200"
                                    : "bg-gray-50 border-gray-200 text-gray-800"
                                    }`}
                            >
                                <div className="flex justify-between items-center mb-2">
                                    <h4 className="text-xl font-semibold">{title}</h4>
                                    <span className="text-2xl">{mood || "💡"}</span>
                                </div>
                                <p className={darkMode ? "text-gray-300 mb-2" : "text-gray-700 mb-2"}>
                                    {description}
                                </p>
                                <div
                                    className={`text-sm mb-2 flex flex-wrap gap-3 ${darkMode ? "text-gray-400" : "text-gray-500"
                                        }`}
                                >
                                    <span>Submitted by: {name}</span>
                                    <span>• Category: <strong>{category || "Other"}</strong></span>
                                    <span>• <em>{format(createdAt)}</em></span>
                                </div>
                                <button
                                    onClick={() => handleLike(_id)}
                                    className="inline-flex items-center space-x-1 text-red-600 hover:text-red-800"
                                    aria-label="Like this idea"
                                >
                                    <span>❤️</span>
                                    <span>{likes || 0}</span>
                                </button>
                            </li>
                        ))}
                </ul>
            )}
        </section>
    );
};

export default LiveIdeaWall;
