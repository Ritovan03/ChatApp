import User from "../models/user.model.js";

export const getUsersForSidebar = async (req, res) => {
    try{
        const loggedInUserID = req.user._id;
        const filteredUsers = await User.find({_id: {$ne: loggedInUserID}}).select("-password");

        res.status(200).json(filteredUsers);

    } catch(err){
        console.log(err);
        res.status(500).json({message: "Internal server error"});
    }
};

export const getMessages = async (req, res) => {
    try{
        
    } catch(err){
        console.log(err);
        res.status(500).json({message: "Internal server error"});
    }
};


