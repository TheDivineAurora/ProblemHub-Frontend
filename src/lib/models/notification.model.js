const { default: mongoose } = require("mongoose");

const NotificationSchema = new Schema({
    message: String,
    createdAt: {
        type: Date,
        default: Date.now
    },
    recipient: {
        type: mongoose.Schema.ObjectId,
        ref: 'User'
    },
    handle: {
        type: mongoose.Schema.ObjectId,
        ref: 'Handle'
    },

});
