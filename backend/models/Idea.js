import mongoose from "mongoose";

const ideaSchema = new mongoose.Schema({
    name: String,
    title: String,
    description: String,
    category: { type: String, enum: ["UI", "Backend", "AI", "Other"], default: "Other" },
    mood: { type: String, default: "💡" },
    likes: { type: Number, default: 0 },
    likedBy: [{ type: String }]
}, { timestamps: true });

const Idea = mongoose.model("Idea", ideaSchema);

export default Idea;
