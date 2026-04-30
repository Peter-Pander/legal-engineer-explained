import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import dotenv from "dotenv";

dotenv.config();

// High shared rate limit to avoid blocking normal app usage.
// Can later be changed to per-user or per-IP limits when authentication is available
// or stricter API protection is needed.
const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(10000, "60 s"),
});

export default ratelimit;
