import { deleteModel } from "mongoose";
import {Order, PowerPlant, Request, Spoc, User} from "../models/index.js"

const getAllSpoc = async (req,res)=>{
  try {
    const allSpoc = await Spoc.find({})

    if(allSpoc.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Spoc not found"
    });
  }

    return res.status(200).json({
      success: true,
      message: "All spoc fetched successfully",
      spocs: allSpoc
    })
    
  } catch (error) {
    console.error(error)
    return res.status(500).json({
      success: false,
      message: "Unable to get all spocs, please try again"
  });
  }
}

const placeOrder = async (req, res) => {
  try {
    const userId = req.user.id; // This is userId, not necessarily PowerPlant _id
    const user = await User.findById(userId);
    const spocId = req.params.spocId;
    const spoc = await Spoc.findById(spocId);

    if (!user) {
      console.log("User not found");
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    if (!spoc) {
      console.log("Spoc not found");
      return res.status(404).json({
        success: false,
        message: "Spoc does not exist",
      });
    }

    // Fetch the PowerPlant associated with this user
    const powerPlant = await PowerPlant.findOne({ userId: userId });
    if (!powerPlant) {
      console.log("PowerPlant not found for userId:", userId);
      return res.status(404).json({
        success: false,
        message: "PowerPlant does not exist for this user",
      });
    }

    const {
      requestedParali,
      offeredPricePerTon,
      totalPrice,
      deliverWithin,
      location,
      message,
    } = req.body;

    if (!requestedParali || !offeredPricePerTon || !totalPrice || !deliverWithin || !location || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    if(spoc.totalParaliCollected<requestedParali)
    {
      return res.status(400).json({
        success:false,
        message:"Insufficient Quantity"
      })
    }

    console.log(user.name);
    const newOrder = await Order.create({
      powerPlantId: powerPlant._id, // Use actual PowerPlant _id
      spocId: spocId,
      name: spoc.name,
      location: spoc.location,
      requestedParali,
      offeredPricePerTon,
      totalPrice,
      deliverWithin,
    });

    // Create Request document and save it to get _id
    const newRequest = await Request.create({
      powerPlantId: powerPlant._id, // Use actual PowerPlant _id
      spocId: spocId,
      orderId:newOrder._id,
      name: user.name,
      requestedParali,
      offeredPricePerTon,
      totalPrice,
      deliverWithin,
      location,
      message,
    });

    

    // Update Spoc and PowerPlant with the saved document _id
    const updatedSpoc = await Spoc.findByIdAndUpdate(
      spocId,
      { $push: { requests: newRequest._id } },
      { new: true }
    );

    console.log("PowerPlant ID:", powerPlant._id);

    const updatedPowerPlant = await PowerPlant.findByIdAndUpdate(
      powerPlant._id, // Use PowerPlant ID instead of userId
      { $push: { orders: newOrder._id } },
      { new: true }
    );

    console.log(updatedPowerPlant);

    return res.status(200).json({
      success: true,
      message: "Order placed successfully",
      updatedSpoc,
      updatedPowerPlant,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Unable to place order, please try again.",
    });
  }
};

const getAllOrders = async (req, res) =>{
    try{
        const userId = req.user.id;
        console.log("user id = ",userId);
        const pp = await PowerPlant.findOne({userId}).populate({
            path: "orders",
            model: "Order"
        });
        console.log(pp);
        if(!pp){
            return res.status(404).json({
                success: false,
                message: "power plant not found"
            })
        } 

        console.log("Orders inside PowerPlant: ", pp.orders);
        res.status(200).json({
            success: true,
            message : "All orders fetched successfully",
            orders: pp.orders
        })


    }
    catch(error){
        console.log("Error in fetching all orders :", error);
        return res.status(400).json({
            success: false,
            message: "getAllOrders failed. Try again!"
        })
    }
}

const getPowerPlantInfo= async(req,res)=>{
  try {
    const userId= req.user.id;
    console.log(userId)
    const powerPlant= await User.findOne({_id:userId});
    console.log(powerPlant)
    if(!powerPlant)
    {
      return res.status(400).json({
        success:false,
        message:"Power plant not found"
      })
    }
    return res.status(200).json({
      success:true,
      message:"Powr plant details fetched successfully",
      powerPlant
    })
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success:false,
      message:"Unable to fetch power plant details, please try again!"
    })
  }
}

export  {getAllSpoc, placeOrder, getAllOrders, getPowerPlantInfo}