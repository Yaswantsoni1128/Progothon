// import {Spoc} from "../models/index.js"

// const getAllSpoc = async (req,res)=>{
//   try {
//     const allSpoc = await Spoc.find({})

//     if(allSpoc.length === 0) {
//       return res.status(404).json({
//         success: false,
//         message: "Spoc not found"
//     });
//   }

//     return res.status(200).json({
//       success: true,
//       message: "All spoc fetched successfully",
//       data: allSpoc
//     })
    
//   } catch (error) {
//     console.error(error)
//     return res.status(500).json({
//       success: false,
//       message: "Unable to get all spocs, please try again"
//   });
//   }
// }

// export  {getAllSpoc}