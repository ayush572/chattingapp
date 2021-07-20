import mongoose from 'mongoose';
const whatsappSchema=mongoose.Schema({
    message: String,
    name: String,
    timestamp: String
})

export default mongoose.model('messageContent',whatsappSchema); //giving name to the collection and tying it to schema  