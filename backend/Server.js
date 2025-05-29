import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

import Idea from "./models/Idea.js";
import { Contact } from "./models/Contact.js";

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
const MONGO_URI = process.env.MONGO_URI;

mongoose
    .connect(MONGO_URI)
    .then(() => console.log("✅ Connected to MongoDB"))
    .catch((err) => console.error("❌ MongoDB connection error:", err));

// Routes
app.post("/api/ideas", async (req, res) => {
    try {
        const { name, title, description } = req.body;
        const newIdea = new Idea({ name, title, description });
        await newIdea.save();
        res.status(201).json({ message: "Idea saved successfully!" });
    } catch (error) {
        res.status(500).json({ message: "Error saving idea", error });
    }
});

// POST route for saving contact form
app.post("/api/contact", async (req, res) => {
    try {
        const { name, email, message } = req.body;
        const newContact = new Contact({ name, email, message });
        await newContact.save();
        res.status(201).json({ message: "Contact saved successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error saving contact" });
    }
});

// Increment likes for an idea by ID
app.post("/api/ideas/:id/like", async (req, res) => {
    try {
        const ideaId = req.params.id;
        const userId = req.body.userId; // unique identifier like email or user ID

        if (!userId) {
            return res.status(400).json({ message: "User ID is required to like" });
        }

        const idea = await Idea.findById(ideaId);

        if (!idea) {
            return res.status(404).json({ message: "Idea not found" });
        }

        if (idea.likedBy.includes(userId)) {
            return res.status(400).json({ message: "You have already liked this idea." });
        }

        idea.likes += 1;
        idea.likedBy.push(userId);

        await idea.save();
        res.json(idea);
    } catch (error) {
        res.status(500).json({ message: "Error liking idea", error });
    }
});


app.get("/api/ideas", async (req, res) => {
    try {
        const ideas = await Idea.find().sort({ likes: -1 }); // 👈 Sort by most liked
        res.json(ideas);
    } catch (error) {
        res.status(500).json({ message: "Error fetching ideas", error });
    }
});


// Start Server
app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});
