const z = require('zod')

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

const email = z.string().email()

const existByUserName = (model) => {
    return async (req, res, next) => {
        const user = await model.findOne({ userName: req.body.userName });
        if (user) {
            return res.status(400).json({ error: "User already exists" });
        }
        next();
    };
};


const compareUserLogIn = (user) => {
    const userLogin = z.object({
        name: z.string().min(5, {message: "name must be 5 or more characters long"}),
        password: z.string().min(6, {message: "Password must be 6 or more characters long"})
    })
    try{
        userLogin.parse(user)
    }catch(err){
        if(err instanceof z.ZodError){
        errors = []
        err.errors.map((error) => {
            errors.push(error.message)
        })
        throw new Error(JSON.stringify(errors))
        }else{
            console.log(err)
        }
    }

};


const compareFullUser = (user) => {
    const userRegister = z.object({
        name: z.string().min(5,"Name must be 5 or more characters long"),
        email: z.string().email("It must be a valid email address"),
        password: z.string().min(6,"Password must be 6 or more characters long")
    })
    try{
        userRegister.parse(user)
    }catch(err){
        if(err instanceof z.ZodError){
        errors = []
        err.errors.map((error) => {
            errors.push(error.message)
        })
        throw new Error(JSON.stringify(errors))
        }else{
            console.log(err)
        }
    }
    
};



module.exports = {validateModel,existByUserName,compareUserLogIn,compareFullUser,email}