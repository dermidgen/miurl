var ook = require('./lib/ook-min');

var miurl = ook.Class().mixin(ook.observable);
miurl.prototype._construct = function()
{
    console.log('Hello World');
    var self = this;
    
    var bootstrap = function()
    {
        return true;
    };
    
    var boostrap_ui = function()
    {
        
    };
    
    this.run = function(mode)
    {
        console.log('MiURL Running');
        if (mode === 'bootstrap') return bootstrap();
        if (mode === 'ui') return boostrap_ui();
    };
}

miurl.__instance = null;
miurl.getInstance = function()
{
    if (miurl.__instance === null) miurl.__instance = new miurl();
    return miurl.__instance;
}

miurl.main = function()
{
    var app = miurl.getInstance();
    var status = app.run('bootstrap');
    console.log(status);
}

miurl.main();