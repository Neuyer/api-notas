const ADMService = require('../services/ADMService');

module.exports = {
    signIn: ADMService.signIn,
    logIn: ADMService.logIn,
    logout: ADMService.logout,
}