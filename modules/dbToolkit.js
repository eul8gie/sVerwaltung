const mongo = require("./db/mongo"),
      Collections = mongo.Collections;

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
/* jshint ignore: start */
let addSchueler = async (schuelerData) => {
    return await Collections.schueler.create(schuelerData);
    
};