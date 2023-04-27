const jwt = require('jsonwebtoken');

function verifyToken(req,res,next){
    const bearerToken = req.headers['authorization']
    console.log('bearer Token : ' + bearerToken)
    if(typeof bearerToken !== 'undefined'){
        //validamos token
        const bearer = bearerToken.split(' ')
        const token = bearer[1]
        console.log('token : ' + token)
        try{
            const decoded = jwt.verify(token,process.env.jwt_secret)
            console.log(decoded)
            return next()
        }catch(err){
            return res.status(401).json({
                status:false,
                content:"errorcito"
            })
        }
    }
    else{
        res.status(403).json({
            status:false,
            content:'no se encontro token'
        })
    }
}

module.exports = verifyToken