const mongoose = require('mongoose');

const PaymentSchema = mongoose.Schema({
    payer:{
        type: String,
        required: true
    },
    reciever:{
        type: String,
        required: true
    },
    amount:{
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Payment', PaymentSchema);