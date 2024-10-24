import rateLimit from 'express-rate-limit'
export const rateLimitConfig = rateLimit({
    windowMS: 1000 * 60 * 5,
    max: 300,
    message: "Too many request incoming, try again later"
})
