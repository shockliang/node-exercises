const fs = require('fs');
const handlebars = require('handlebars');

var output = (data) => {
    var source = '';
    var template = '';
    var contents = '';

    fs.readFile('./views/log.hbs','utf-8', (err, readData) => {
        if(err) console.log(err);
        source = readData;
        template = handlebars.compile(source);
        contents = template(data);

        fs.writeFile('content.html', contents, (err) => {
            if (err) {
                return console.error(`Autsch! Failed to store template: ${err.message}.`);
            }

            console.log(`Saved template!`);
        });
    });

    
};

module.exports.output = output;
