// Configuring rate limiting and redis

import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

import dotenv from "dotenv";

dotenv.config();

// create a rate limiter that allows 100 requests per 60 seconds
/**
 * Initializes a rate limiter using Upstash Redis with a sliding window algorithm.
 * Limits requests to 100 per 60 seconds.
 *
 * @constant
 * @type {Ratelimit}
 * @property {Redis} redis - Redis client instance loaded from environment variables.
 * @property {Limiter} limiter - Sliding window limiter set to 100 requests per 60 seconds.
 */
const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(100, "60 s"),
});

export default ratelimit;
