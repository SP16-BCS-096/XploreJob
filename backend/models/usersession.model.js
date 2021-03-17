const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const usersessionSchema = new Schema(
    {
        adminId: 
        {
            type:  String,
            default: ''
        },
        timestamp: 
        {
            type: Date,
            default: Date.now(),

        },
        isDeleted : 
        {
            type: Boolean,
            default: false
        }
    });

const UserSession = mongoose.model("UserSession",usersessionSchema);
    
module.exports = UserSession;