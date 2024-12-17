const jwt = require("jsonwebtoken");
const key = process.env.JWT_SECRET || "default_secret";

function generatejwt(user, res) {
  const token = jwt.sign(
    {
      username: user.username,
      email: user.email,
      userId: user._id,
    },
    key,
    { expiresIn: "30d" } // Expire in 1 hour
  );

  console.log("Generated JWT:", token);

  res.cookie("uid", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
  });

  console.log("Cookie set successfully");
}

function getuser(token) {
  try {
    return jwt.verify(token, key);
  } catch (err) {
    console.error("Invalid or expired token:", err.message);
    return null;
  }
}

module.exports = { generatejwt, getuser };
