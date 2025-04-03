import { User , Otp, Spoc, PowerPlant } from "../models/index.js"
import otpGenerator from "otp-generator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
import dotenv from "dotenv";
dotenv.config();

const sendOtp = async (req, res) => {
    try {
        const { email } = req.body;

        const checkUserPresent = await User.findOne({ email });
        if (checkUserPresent) {
            return res.status(401).json({
                success: false,
                message: "User Already Exists",
            });
        }
        let otp;
        let result;

        do {
            otp = otpGenerator.generate(6, {
                upperCaseAlphabets: false,
                lowerCaseAlphabets: false,
                specialChars: false,
            });
            result = await Otp.findOne({ otp });
        } while (result);
        const otpPayload = { email, otp };
        await Otp.create(otpPayload);

        console.log("OTP Sent Successfully");

        res.status(200).json({
            success: true,
            message: "OTP sent successfully",
        });

    } catch (error) {
        console.error("Error Sending OTP", error);
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};


const signUp = async (req, res) => {
    try {
        const {
            name,
            email,
            password,
            phone,
            location,
            role,
            otp
        } = req.body;

        if (!name || !email || !password || !phone || !otp || !role || !location) {
            return res.status(403).json({
                success: false,
                message: "All fields are required",
            });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "User is already registered"
            });
        }

        const recentOtp = await Otp.find({ email }).sort({ createdAt: -1 }).limit(1);
        console.log(recentOtp)
        if (recentOtp.length === 0) {
            return res.status(400).json({
                success: false,
                message: "Otp not found"
            });
        }

        if (otp !== recentOtp[0].otp) {
            return res.status(400).json({
                success: false,
                message: "Invalid Otp"
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        // Create user object
        const user = new User({
            name,
            email,
            password: hashedPassword,
            role,
            location,
            phone,
            image: `https://api.dicebear.com/5.x/initials/svg?seed=${name} ${name}`
        });

        // Save user in User model
        const savedUser = await user.save();

        // If the user is a SPOC, save them in the SPOC model
        if (role === "spoc") {
            const newSpoc = new Spoc({
                userId: savedUser._id, // Reference to the User model
                name: `${name} `,
                email,
                phone,
                location,
                totalParaliCollected:0,
            });

            await newSpoc.save();
        }

        // If the user is a Power Plant, save them in the PowerPlant model
        if (role === "power_plant") {
            const newPowerPlant = new PowerPlant({
                userId: savedUser._id, // Reference to the User model
                name: `${name}`,
                email,
                phone,
                location
            });

            await newPowerPlant.save();
        }

        return res.status(200).json({
            success: true,
            message: "User registered successfully",
            savedUser
        });

    } catch (error) {
        console.error(error);
        return res.status(400).json({
            success: false,
            message: "User is not registered, Please try again"
        });
    }
};


const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "All fields are required",
            });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({
                success: false,
                message: "User is not registered",
            });
        }

        if (await bcrypt.compare(password, user.password)) {
            const payload = {
                email: user.email,
                id: user._id,
                role: user.role,  // Include role
            };

            const token = jwt.sign(payload, process.env.SECRET_KEY, {
                expiresIn: "2h",
            });

            user.token = token;
            user.password = undefined;

            const options = {
                expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
                httpOnly: true,
            };

            res.cookie("token", token, options).status(200).json({
                success: true,
                message: "User Logged in successfully",
                token,
                role: user.role,  // Explicitly return role
                user,
            });
        } else {
            return res.status(400).json({
                success: false,
                message: "Incorrect Password",
            });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Unable to Login, Please try again",
        });
    }
};

const getUserInfo=async(req,res)=>{
    try {
        const userId=req.user.id;
        const user= await User.findById(userId);
        if(!user)
        {
            return res.status(400).json({
                success:false,
                message:"User not found"
            })
        }
        return res.status(200).json({
            success:true,
            message:"User details fetched successfully",
            user
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"Unable to fetch user details, please try again!"
        })
    }
}

export {sendOtp,login,signUp, getUserInfo}