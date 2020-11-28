module.exports = {
    getPort: function () {
        const PORT = '3000'; //default port
        if (process.env.PORT) {
            return process.env.PORT
        } else {
            return PORT;
        }
    },

    loadEnvironmentConfiguration: function () {
        // load dotenv here - future use
    }
}