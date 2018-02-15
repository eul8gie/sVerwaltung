const fs = require('fs');
const path = require('path');

function addRoutesGroup(app, groupName, baseUri) {
    let routePath = path.join(__dirname, "../routes", groupName);
    fs.readdirSync(routePath).forEach((file) => {
        file = file.substring(0, file.indexOf("."));
        
        let uri = (file === "index" || file === groupName ? "" : "/" + file);
        
        app.use(baseUri + uri, require("../routes/" + groupName + "/" + file));
    });
}

module.exports = function(app) {
    addRoutesGroup(app, 'view', "/");
    addRoutesGroup(app, 'api', "/api");
    addRoutesGroup(app, 'component', "/component");

    // catch 404 and forward to error handler
    app.use(function(req, res, next) {
        let err = new Error('Not Found');
        err.status = 404;
        next(err);
    });

    // error handlers

    // development error handler
    // will print stacktrace
    if (app.get('env') === 'development') {
        app.use(function(err, req, res, next) {
            res.status(err.status || 500);
            res.render('error', {
                message: err.message,
                error: err
            });
        });
    }

    // production error handler
    // no stacktraces leaked to user
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: {}
        });
    });
};
