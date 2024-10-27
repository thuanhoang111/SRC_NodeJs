import "dotenv/config";
import jwt from "jsonwebtoken";
function generateAccessToken(body) {
  return jwt.sign(body, process.env.JWT_SECRET_KEY, {
    expiresIn: "10s",
    // algorithm: "RS256",
  });
}
function generateRefreshToken(body) {
  return jwt.sign(body, process.env.JWT_REFRESH_KEY, {
    expiresIn: "1h",
    // algorithm: "RS256",
  });
}
function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, body) => {
    if (err) return res.sendStatus(403);
    console.log("🚀 ~ jwt.verify ~ user:", body);

    req.inforUser = body;
    // req.user = user;

    next();
  });
}
export { generateAccessToken, authenticateToken, generateRefreshToken };
