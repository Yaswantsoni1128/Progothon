import mongoose, { trusted } from "mongoose"

const paraliListingSchema = new mongoose.Schema({
  spocId:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Spoc",
    required: true
  },
  farmers: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Farmer",
    required: true
  }],
  totalWeight: {
    type: Number,
    required: true,
    min: 0
  },
  pricePerTon: {
    type: Number,
    required: true
  },
  status: {
    type : String,
    enum: ['available','sold'],
    required: true
  }
},{timestamps: true})

export const ParaliList = mongoose.model("ParaliList",paraliListingSchema)