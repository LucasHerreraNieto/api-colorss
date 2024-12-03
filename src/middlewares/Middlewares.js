//validate model
const validateModel = (schema) => {
    return async (req, res, next) => {
        const result = schema.validate(req.body, { abortEarly: false });
        if (result.error) {
            return res.status(400).json({
                errores: result.error.details.map((error) => ({
                error: error.message,
            })),
        });
    }
    next();
    };
};


const existByUserName = (model) => {
    return async (req, res, next) => {
        const user = await model.findOne({ userName: req.body.userName });
        if (user) {
            return res.status(400).json({ error: "User already exists" });
        }
        next();
    };
};


const validateUserNamePassword = (req) => {
    const {name, password} = req;

    if(typeof name != 'string') throw new Error('userName must be a string');
    if(name.length < 3) throw new Error('userName must be at least 3 characters');

    if(typeof password != 'string') throw new Error('password must be a string');
    if(password.length < 3) throw new Error('password must be at least 3 characters');
    
}


module.exports = {validateModel,existByUserName,validateUserNamePassword}