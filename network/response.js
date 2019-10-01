const chalk = require('chalk');
const statusMessages = {
    '200': 'Done',
    '201': 'Created',
    '400': 'Invalid format',
    '500': 'Internal error'
}
exports.success = function (req, res, message, status) {
    let statusCode = status;
    if(!status){
        status = 200;
    }
    if(!message){
        statusMessage = statusMessages[status]; 
    }
    res.status(statusCode || 200).send({
        error: '',
        body: statusMessage
    });
}

exports.error = function (req, res, message, status, details) {
    console.error(chalk.red('[response error]',details));
    res.status(status || 500).send({
        error: message,
        body: '',
    });
}