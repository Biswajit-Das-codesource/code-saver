const { getuser } = require("../utils/jwt");

async function checkauth(req, res, next) {
  const cookie = req.cookies.uid;

  if (!cookie) return res.redirect("/loginpage");

  const user = getuser(cookie);
  req.user = user;
  console.log(req.user);
  next();
  
}

module.exports = {
  checkauth,
  
};
