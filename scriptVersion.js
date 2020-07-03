const updateJsonFile = require('update-json-file');

const packageApp = require('./package.json');

const versionApp = packageApp.version;
const filePath = './app.json';

updateJsonFile(filePath, function(data) {
    data.version = versionApp;
    return data
})
