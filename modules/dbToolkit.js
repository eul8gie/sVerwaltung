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