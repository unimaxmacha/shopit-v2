import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter your name."],
            maxLength: [50, "Your name cannot exceed 50 characters."],
        },
        email: {
            type: String,
            required: [true, "Please enter your email."],
            unique: true,
        },
        email: {
            type: String,
            required: [true, "Please enter your password."],
            minLength: [6, "Your password much be minimum of 6 characters."],
            select: false,
        },
        avatar: {
            public_id: String,
            url: String,
        },
        role: {
            type: String,
            default: "user",
        },
        resetPasswordToken: String,
        resetPasswordExpire: Date,
    }, 
    { timestamps: true }
);

export default mongoose.model("User", userSchema);