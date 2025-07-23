import ratelimit from "../config/upstash.js";

/**
 * Express middleware to enforce rate limiting on incoming requests.
 * Uses the `ratelimit.limit` method to check if the request exceeds the allowed rate.
 * If the rate limit is exceeded, responds with HTTP 429 and an error message.
 * Otherwise, passes control to the next middleware.
 *
 * @async
 * @function rateLimiter
 * @param {import('express').Request} req - Express request object.
 * @param {import('express').Response} res - Express response object.
 * @param {import('express').NextFunction} next - Express next middleware function.
 */
const rateLimiter = async (req, res, next) => {
  try {
    const { success } = await ratelimit.limit("my-limit-key");

    if (!success) {
      return res.status(429).json({
        message: "Too many requests, try again later",
      });
    }

    next();
  } catch (error) {
    console.log("Rate Limit Error", error);
    next(error);
  }
};

export default rateLimiter;
