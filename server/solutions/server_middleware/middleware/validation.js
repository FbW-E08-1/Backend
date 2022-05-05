export const isAdult = (req, res, next) => {
  const { age } = req.body;
  if (parseInt(age) < 18) {
    const error = new Error("You are so young, get out of here ....");
    error.status = 400;
    next(error);
  }
  next();
};

//validKeys function
export const validKeys = (req, res, next) => {
  const { firstName, lastName, age } = req.body;

  if (!firstName || !lastName || !age) {
    const error = new Error("Some fields are missing");
    next(error);
  }
  next();
};

//isFam - FbW function
