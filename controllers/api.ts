const home = (req, res, next) => {
  return res.status(200).json({
    message: 'this home from controllers.',
  });
};

const login = (req, res, next) => {
  return res.status(200).json({
    message: 'this Login from controllers.',
  });
};

const register = (req, res, next) => {
  return res.status(200).json({
    message: 'this Register from controllers.',
  });
};

const logout = (req, res, next) => {
  return res.status(200).json({
    message: 'this Logout from controllers.',
  });
};

export default {
  home,
  login,
  register,
  logout,
};
