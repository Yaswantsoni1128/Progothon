import mongoose from "mongoose"

const orderSchema = new mongoose.Schema({
  powerPlantId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "PowerPlant",
      required: true,
    },
    name:{
      type:String,
      required:true,
    },
    spocId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Spoc",
      required: true
    },
    requestedParali: {
      type: Number,
      min: 0 ,
      required: true
    },
    offeredPricePerTon: {
      type: Number,
      min: 0,
      required: true
    },
    totalPrice: {
      type: Number,
      min : 0,
      required: true,
    },
    deliverWithin:{
      type:Number,
      required:true
    },
    location:{
      type:String,
      required:true
    },
    status: {
      type: String,
      enum: ['pending','accepted','rejected'],
      default: 'pending'
    },
},{timestamps: true})

export const Order = mongoose.model("Order",orderSchema)