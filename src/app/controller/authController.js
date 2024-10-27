import { generateAccessToken, generateRefreshToken } from "../../utils/JWT.js";

class authController {
  login(req, res) {
    const { userId, password } = req.body;
    const accessToken = generateAccessToken({
      userId,
    });
    const refreshToken = generateRefreshToken({
      userId,
    });
    res.status(200).json({ accessToken, refreshToken });
  }
  verify(req, res) {
    res.status(200).json({ result: req.inforUser });
  }
  refreshToken(req, res) {
    const { token } = req.body;
    if (!token) return res.sendStatus(401);
    if (!refreshTokens.includes(token)) return res.sendStatus(403);

    jwt.verify(token, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
      if (err) return res.sendStatus(403);
      const accessToken = generateAccessToken({ name: user.name });
      res.json({ accessToken });
    });
  }
}
const auth = new authController();
export { auth };
