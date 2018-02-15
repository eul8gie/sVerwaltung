const cronJobManager = require("../modules/cronJobManager");

module.exports = async (app, io) => {
    try {
        let cron = await cronJobManager.init(require("../modules/toolkits/dbToolkit").Collections, io);
        app.use(async (req,res,next) => {
            req.cron = cron;
            next();
        });
    } catch(e) {
        console.error(e);
    }
};