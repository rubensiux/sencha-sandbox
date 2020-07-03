const updateJsonFile = require('update-json-file');
const shell = require('shelljs');

const packageApp = require('./package.json');

const versionApp = packageApp.version;
const filePath = './app.json';

updateJsonFile(filePath, (data) => {
    data.version = versionApp;
    return data
}).then(() => {
    if (!shell.which('git')) {
        shell.echo('Sorry, this script requires git');
        shell.exit(1);
    } else {
        shell.exec('git add ./app.json');
    }
});
