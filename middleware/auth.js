function auth(req, res, next) {
  if (req.query.admin === "true") {
    next();
  } else {
    res.send("no auth");
  }
}

module.exports = auth;
