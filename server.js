var
express = require('express'),
chalk   = require('chalk'),
ip      = require('ip'),
port    = 3000,
app     = express();

app.use(express.static('public'));
app.listen(port, function () {
    console.log(
        'Server started' + chalk.green(' ✓ \n') +
        chalk.bold('Access URLs: \n') +
        chalk.gray('----------------------------------- \n') +
        'Localhost: ' + chalk.blue('http://localhost:' + port) + '\n' +
        '      LAN: ' + chalk.blue(ip.address() + ':'  + port)       + '\n' +
        chalk.gray('----------------------------------- \n') +
        'Press ' + chalk.blue('CTRL-C') + ' to stop'
    );
});
