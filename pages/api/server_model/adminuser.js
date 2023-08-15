var mongoose = require('mongoose');
const bcrypt = require('bcrypt');


const Schema = mongoose.Schema


const adminuserSchema = new Schema({
    username: String,    
    email: String,
    password: String,
    mobile: String,
    address: String,    
    avater: String,    
    created_date: String,
    updated_date: String  
})



adminuserSchema.pre('save', async function(next){
	try{
		const salt = await bcrypt.genSalt(10)
		const hashedPassord = await bcrypt.hash(this.password, salt)
		this.password = hashedPassord
		next()
	}catch(error){
		next(error)
	}
})




module.exports = mongoose.models.adminuser || mongoose.model('adminuser', adminuserSchema);


