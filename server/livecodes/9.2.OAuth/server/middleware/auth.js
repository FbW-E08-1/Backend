import jwt from "jsonwebtoken";

const auth = async (req, res, next) => {
  //code here
  try {
    const token =
      req.headers.authorization && req.headers.authorization.split(" ")[1];

    if (token) {
      let decodedData = jwt.decode(token);
      req.googleId = decodedData.sub;
    }
    next();
  } catch (error) {
    res.send(error.message);
  }
};

export default auth;
