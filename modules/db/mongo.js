
const fs = require("fs"),
      path = require("path"),
      mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/sdep",{
    useMongoClient: true
});

let Schemas = fs.readdirSync(path.join(__dirname, "./Schemas"));

let Collections = {};

for(let i = 0; i < Schemas.length; i++) {
    let schema = Schemas[i].substring(0, Schemas[i].lastIndexOf("."));
    Collections[schema] = mongoose.model(schema, require("./Schemas/" + schema));
}

module.exports.Collections = Collections;