const errMiddleWare = (req, res, next) => {
  if (Object.keys(req.body).length === 0) {
    console.log('No request body was sent.');
    return res.status(400).json({ message: 'No request body' });
  }
  next();
};

export default errMiddleWare;
