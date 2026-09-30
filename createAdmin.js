const User = require('./models/User')
const bcrypt = require('bcrypt')
async function createAdmin(){
    try {
        let user = await User.findOne({email:'tyagitanishq100@yopmail.com'});
        if(user){
            console.log('user updated successfully...');
        }else{
            user = new User();
            user.firstName='Riyansh';
            user.lastName='Sehgal';
            user.mobileNo='8800415794'
            user.email='riyanshsehgal4@yopmail.com';
            let password = bcrypt.hashSync('123456',10);
            user.password = password;
            user.userType = 'admin';
            await user.save();
            console.log('user created successfully...');
        }
    } catch (err) {
        console.log(err)
    }
}
module.exports = createAdmin