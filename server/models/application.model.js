const mongoose = require('mongoose');

const ApplicationSchema = new mongoose.Schema({
    jobTitle: {
        type: String, 
        required: [true, "Job Title is required."],
        minlength: [3, "Job Title must contain at least 3 characters."]
    },
    company: {
        type: String, 
        required: [true, "Company is required."],
        minlength: [3, "Company must contain at least 3 characters."]
    },
    location: {
        type: String, 
        required: [true, "Location is required."],
        minlength: [3, "Location must contain at least 3 characters."]
    },
    salary: {
        type: Number
    },
    applicationLink: {
        type: String,
        required: [true, "Application link is required."],
        minlength: [3, "Application link must contain at least 3 characters."]
    },
    jobDescription: {
        type: String,
        required: [true, "Job description is required."],
        minlength: [3, "Job description must contain at least 3 characters."]
    },
    interview: {
        type: String,
        enum: ["Yes", "No"],
        required: [true, "Interview is required."]
    },
    interviewer: {
        type: String
    },
    overview: {
        type: String
    },
    technicalInterviewer: {
        type: String
    },
    technicalOverview: {
        type: String
    },
    userName: {
        type: String
    },
    userId: {
        type: String
    }
}, { timestamps: true });

module.exports = mongoose.model('Application', ApplicationSchema)
