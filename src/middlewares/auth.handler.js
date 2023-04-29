const jwt = require('jsonwebtoken');

function verifyToken(req, res, next) {
    const bearerToken = req.headers['authorization']
    if (typeof bearerToken !== 'undefined') {
      const bearer = bearerToken.split(' ')
      const token = bearer[1]
      try {
        const decoded = jwt.verify(token, process.env.jwt_secret)
        const userId = decoded.id;
        req.userId = userId; // agregamos la propiedad userId al objeto req
        return next()
      } catch (err) {
        return res.status(401).json({
          status: false,
          content: "errorcito"
        })
      }
    } else {
      res.status(403).json({
        status: false,
        content: 'no se encontro token'
      })
    }
  }
  

module.exports = verifyToken
