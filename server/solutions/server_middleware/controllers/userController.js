export const validationResponse = (req, res) => {
  res.send("This user looks valid!");
};

export const sanitizationResponse = (req, res) => {
  res.send(req.body);
};
