const jwt = require("jsonwebtoken");

const secretKey = "THIS_IS_MY_VERY_SECRET_KEY";

exports.createAccessToken = (user) =>
  jwt.sign({ id: user.id, email: user.email, name: user.name }, secretKey);

exports.decodeAccessToken = (accessToken) => jwt.verify(accessToken, secretKey);
