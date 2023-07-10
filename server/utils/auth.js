import jwt from 'jsonwebtoken';

// set token secret and expiration date
const secret = 'mysecretsshhhhh';
const expiration = '2h';

const auth = {
  // function for our authenticated routes
  authMiddleware: function (req) {
    // allows token to be sent via  req.query or headers
    let token = req.headers.authorization || req.token || req.query.token;
    console.log('This is your token: ' + token);
    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }
    if (!token) {
      console.log('I aint got no token fam');
      return req;
    }

    // verify token and get user data out of it
    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
      return req;
    } catch {
      console.log('Invalid token');
      return req;
    }
  },
  signToken: function ({ email, _id }) {
    console.log('creating token');
    const payload = { email, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
export default auth;
