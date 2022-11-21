// business logic of application 

const userModel = require('../models/userModel')

exports.Home = (req, res) => {
    res.send('Form the controller.js')
}

exports.createUser = async (req, res) => {
    try {
        // creating a new user in database
        const { name, email } = req.body;

        // check if any field are missing
        if (!(name || email)) {
            throw new Error(`All fields are required`);
        }

        //check if email already exist in database
        const existingEmail = await userModel.findOne({ email });

        //if email exist in databse then show error message
        if (existingEmail) {
            throw new Error(`${email} email already exists in database`);
        }

        // if email not exist in database then Create a user and  save it in databse
        const user = await userModel.create({ name, email });

        //sending the response 
        res.status(200).json({
            success: true,
            message: `User Created succesfully`,
            // sending user
            user
        })




    } catch (error) {
        console.log(error)
        res.status(400).json({
            sucess: false,
            message: error.message
        })
    }

}

exports.getUser = async (req, res) => {
    try {
        const users = await userModel.find();
        res.status(200).json({
            sucess: true,
            users,
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

exports.editUser = async(req, res)=>{
    try {
        const user = await userModel.findByIdAndUpdate

    } catch (error) {
        console.log(error);
       res.status(400).json({
        sucess:false,
        message:error.message
       });
    }
};