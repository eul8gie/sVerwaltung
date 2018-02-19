const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schuelerSchema = new Schema({
    firstname: String,
    lastname: String
});

const Schueler = mongoose.model(schuelerSchema);




module.exports.Collections =  {
    user: {
        findOne: () => {
            return {
                _id: 0,
                name: "heinz",
                password: "becker",
                roles: ["admin"],
                salt: 5
            };
        }
    }
};