const Authentication = require('./controllers/authentication.js');

module.exports = function(app) {
    app.post('/users', Authentication.signup);
}
