import mongoose from "mongoose";

const {Schema} = mongoose;

const businessUserSchema = new Schema({
    username:{type: String, required:true, unique:true},
    userType: { type: String, required: true, enum: ['business', 'standard'], default: 'business' },
    password:{type: String, required:true},
    companyName:{type: String, required:true},
    businessOwner: String,
    emailAddress:{type: String, required:true, unique:true},
    businessAddress: [
        {
            street: {type: String, required:true},
            zipcode: {type: Number, required:true},
            city: {type: String, required:true},
        }
    ],
    businessTelephone: Number,
    typeOfBusiness: {type: String, required:true},
    companyHistory: String,
    products: [
        {type: mongoose.Types.ObjectId, required:true, ref:"Product"}
    ]

}, {timestamps: true})


const BusinessUser = mongoose.model("BusinessUser", businessUserSchema)

export default BusinessUser;