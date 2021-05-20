
//Address
const Address = require('../models/address');


module.exports = {
  getAllAddresses
}
//posts = await PlantPost.find({}).sort({'_id': -1}).populate('user').populate('plant').exec() // userSchema.set('toObject') gets invoked, to delete the password
async function getAllAddresses(req, res){
    try{
        const allAddresses = await Address.find({}).populate('attic').populate('house')
                    .populate('roof').populate('spHeater').populate('utility')
                    .populate('waHeater').exec();
        res.status(200).json({allAddresses});
    } catch(err){
        return res.status(401).json(err)
    }
    
}

