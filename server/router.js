module.exports = function(app) {
    app.get('/', function(req, res, next) {
        res.send(["Hey"]);
    });

    app.post('/users', Authentication.signup);
}
