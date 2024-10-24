import jwt from "jsonwebtoken"

export const verifyAccessToken = (req, res, next) => {
    const authHeader = req.headers.authorization
    if (authHeader) {
        const token = authHeader.split(" ")[1]
        jwt.verify(token, process.env.SECRET, (err, decoded)=>{
            if (err) return res.status(401).json({success: false, message: "Invalid or expired token"})
                req.decoded = decoded
                next()
            })
    }else{
        res.status(401).json({success:false, messsage: "No access token provide"})
    }
}