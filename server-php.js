var
express = require('express'),
php     = require('express-php'),
chalk   = require('chalk'),
ip      = require('ip'),
port    = 4000,
app     = express();
 
app.use(php.cgi('./httpdocs', '/usr/local/bin/php-cgi'));
app.use(express.static('./httpdocs'));
 
app.listen(port, function () {
    console.log(
        'PHP Server started' + chalk.green(' ✓ \n') +
        chalk.bold('Access URLs: \n') +
        chalk.gray('----------------------------------- \n') +
        'Localhost: ' + chalk.blue('http://localhost:' + port) + '\n' +
        '      LAN: ' + chalk.blue(ip.address() + ':'  + port)       + '\n' +
        chalk.gray('----------------------------------- \n') +
        'Press ' + chalk.blue('CTRL-C') + ' to stop'
    );
});
