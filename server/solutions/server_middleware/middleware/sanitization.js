export const sanitizeName = (req, res, next) => {
  const { firstName, lastName } = req.body;
  //dilshod ==> d --> Dilshod
  req.body.firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
  req.body.lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);
  next();
};

export const stringsToNumbers = (req, res, next) => {
  req.body.age = parseInt(req.body.age);
  req.body.fbw = parseInt(req.body.fbw);
  next();
};

export const sortBands = (req, res, next) => {
  req.body.favoriteBands.sort();
  next();
};
