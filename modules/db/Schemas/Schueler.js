const Schema = require('mongoose').Schema;
const address =  {
    street: String,
    number: Number,
    postcode: String,
    city: String,
    area: String
};
module.exports = new Schema({
    firstname: String,
    lastname: String,
    sex: String,
    birth: Date,
    birth_place: String,
    citizenship: String,
    religion: String,
    address: address,
    phone: [Number],
    email: String,
    guardian: {
        firstname: String,
        lastname: String,
        address: address
    },
    profession: {
        subject: String,
        start: Date,
        end: Date,
        eqj: Boolean
    },
    enterprise: {
        name: String,
        contact: String,
        address: address,
        phone: [String],
        fax: String,
        email: String
    },
    common_school: {
        type: String,
        year: Number,
        class: Number,
        grad: Boolean,
        grad_type: String,
        grad_class: Number
    },
    business_school: {
        type: String,
        name: String,
        start: Date,
        end: Date,
        grad: Boolean,
        grad_type: String
    }
    
    
});