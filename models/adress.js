const mongoose = require('mongoose');

const addressSchema = mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    attic: { type: mongoose.Schema.Types.ObjectId, ref: 'Attic'},
    house: { type: mongoose.Schema.Types.ObjectId, ref: 'House'},
    roof: { type: mongoose.Schema.Types.ObjectId, ref: 'Roof'},
    spHeater: { type: mongoose.Schema.Types.ObjectId, ref: 'SpHeater'},
    utility: { type: mongoose.Schema.Types.ObjectId, ref: 'Utility'},
    waHeater: { type: mongoose.Schema.Types.ObjectId, ref: 'WaHeater'},
    approved: {type: Boolean}
}, {
    timestamps: true
  });

module.exports = mongoose.model('Address', addressSchema)