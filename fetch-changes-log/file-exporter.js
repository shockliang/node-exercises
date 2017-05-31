const fs = require('fs');
const handlebars = require('handlebars');

var output = (data, outputFileName) => {
    var template = '';
    var contents = '';

    fs.readFile('./views/log.hbs','utf-8', (err, buffer) => {
        if(err) {
            return console.error(err);
        }

        console.log(`output file name:${outputFileName}`);
        template = handlebars.compile(buffer);
        contents = template(data);
        
        fs.writeFile(outputFileName, contents, (err) => {
            if (err) {
                return console.error(`Autsch! Failed to store template: ${err.message}.`);
            }

            console.log(`Saved template!`);
        });
    });

    
};

module.exports.output = output;