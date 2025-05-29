import React, { useState } from "react";

const Idea = ({ darkMode }) => {
    const [formData, setFormData] = useState({
        name: "",
        title: "",
        description: "",
        category: "UI",
        mood: "💡"
    });

    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Submitting...");

        try {
            const response = await fetch("http://localhost:5000/api/ideas", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (response.ok) {
                setStatus("Idea submitted successfully!");
                setFormData({ name: "", title: "", description: "", category: "UI", mood: "💡" });
            } else {
                setStatus(result.message || "Failed to submit idea.");
            }
        } catch (error) {
            console.error("Error submitting idea:", error);
            setStatus("An error occurred.");
        }
    };

    const inputStyles = darkMode
        ? "bg-neutral-800 text-white border-gray-600"
        : "bg-white text-black border-gray-300";

    return (
        <section className={`py-16 px-4 ${darkMode ? "bg-neutral-900 text-white" : "bg-white text-black"}`} id="submit">
            <div className={`max-w-xl mx-auto p-8 rounded shadow ${darkMode ? "bg-neutral-800" : "bg-gray-50"}`}>
                <h2 className="text-2xl font-bold text-center text-purple-700 mb-6">
                    Submit Your Dream Feature 💡
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block mb-1 font-medium">Your Name</label>
                        <input
                            type="text"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className={`w-full border rounded px-3 py-2 ${inputStyles}`}
                        />
                    </div>
                    <div>
                        <label className="block mb-1 font-medium">Feature Title</label>
                        <input
                            type="text"
                            name="title"
                            required
                            value={formData.title}
                            onChange={handleChange}
                            className={`w-full border rounded px-3 py-2 ${inputStyles}`}
                        />
                    </div>
                    <div>
                        <label className="block mb-1 font-medium">Feature Description</label>
                        <textarea
                            name="description"
                            required
                            rows="4"
                            value={formData.description}
                            onChange={handleChange}
                            className={`w-full border rounded px-3 py-2 ${inputStyles}`}
                        ></textarea>
                    </div>
                    <div>
                        <label className="block mb-1 font-medium">Category</label>
                        <select
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            className={`w-full border rounded px-3 py-2 ${inputStyles}`}
                        >
                            <option value="UI">UI</option>
                            <option value="Backend">Backend</option>
                            <option value="AI">AI</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div>
                        <label className="block mb-1 font-medium">Mood</label>
                        <select
                            name="mood"
                            value={formData.mood}
                            onChange={handleChange}
                            className={`w-full border rounded px-3 py-2 ${inputStyles}`}
                        >
                            <option value="😊">😊 Happy</option>
                            <option value="🔥">🔥 Excited</option>
                            <option value="💡">💡 Creative</option>
                            <option value="🤔">🤔 Thoughtful</option>
                        </select>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition"
                    >
                        Submit Idea
                    </button>
                </form>
                {status && <p className="text-center text-sm mt-4 text-purple-500">{status}</p>}
            </div>
        </section>
    );
};

export default Idea;
