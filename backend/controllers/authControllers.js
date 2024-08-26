import catchAsyncErrors from "../middlewares/catchAsyncErrors.js";
import User from "../models/user.js";
import ErrorHandler from "../utils/errorHandler.js";

// Register User => /api/v1/register
export const registerUser = catchAsyncErrors(async (req, res, next) => {
    const { name, email, password } = req.body;

    const user = await User.create({
        name,
        email,
        password,
    });

    const token = user.getJwtToken();

    res.status(201).json({
        token,
    });
});

// Login User => /api/v1/login
export const loginUser = catchAsyncErrors(async (req, res, next) => {
    const { email, password } = req.body;

    if(!email || !password) {
        return next (new ErrorHandler("Please enter email & password", 400));
    };

    // Find user in the database
    const user = await User.findOne({ email }).select("+password");

    if(!user) {
        return next (new ErrorHandler("Invalid email or password", 401));
    };

    // Check if password is correct
    const isPasswordMatched = await user.comparePassword(password);
    if(!isPasswordMatched) {
        return next (new ErrorHandler("Invalid email or password", 401));
    };

    const token = user.getJwtToken();

    res.status(200).json({
        token,
    });
});