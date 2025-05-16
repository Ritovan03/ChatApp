import jwt from "jsonwebtoken";
export const generateToken = (userId, res) => {
    const token = jwt.sign({ id: userId }, process.env.JWT_SECRET, {
        expiresIn: "3d",
    });

    res.cookie("jwt", token, {
        httpOnly: true, //prevent XSS attacks
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict", // CSRF protection
        maxAge: 3 * 24 * 60 * 60 * 1000, // 3 days
    }); 
}