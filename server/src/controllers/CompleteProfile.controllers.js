import {User , Spoc , Farmer , PowerPlant} from "../models/index.js"


const completeProfile = async (req, res) => {
    try {
        const { userId } = req.params;
        const { additionalDetails } = req.body;//spocName, village,

        const user = await User.findById(userId);
        if (!user) return res.status(404).json({ message: "User not found" });

        let profileModel;
        let extraDetails = {}; // Additional data to add to profile

        if (user.role === "spoc") {
            profileModel = Spoc;
            extraDetails.village = user.location; // Adding village from user.location
        } else if (user.role === "power_plant") {
            profileModel = PowerPlant;
        } else {
            return res.status(400).json({ message: "Invalid role" });
        }

        // Check if profile already exists
        let profile = await profileModel.findOne({ userId });
        if (profile) {
            profile = await profileModel.findByIdAndUpdate(
                profile._id,
                { ...additionalDetails, ...extraDetails },
                { new: true }
            );
        } else {
            profile = new profileModel({ userId, ...additionalDetails, ...extraDetails });
            await profile.save();
        }

        user.additionalDetails = profile._id;
        console.log("Received data:", req.body);

        await user.save();

        res.status(201).json({ message: "Profile completed successfully", profile });
    } catch (error) {
        res.status(500).json({ message: "Server Error", error });
    }
};

// Fetch User Profile with Linked Additional Details
const getUserProfile = async (req, res) => {
    try {
        const { userId } = req.params;
        
        console.log("Userid recieved", userId)

        const user = await User.findById(userId).populate("additionalDeatils");

        if (!user) return res.status(404).json({ message: "User not found" });

        console.log("User fetched successfully")

        res.status(200).json({ success: true , user });
    } catch (error) {
        res.status(500).json({ message: "Server Error", error });
    }
};

export {completeProfile , getUserProfile}