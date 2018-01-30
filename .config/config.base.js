var path = require('path');
module.exports = {
    // there was a typo here
    frameworks: ['mocha', 'chai'],
    browsers: ['Chrome'],
    files: [
        // Paths of your source and test scripts
        '../src/simple.message.function.js',
        '../test/simple.message.function.spec.js',
        '../src/app.js',
        '../test/test.spec.js'
    ],
    customContextFile: path.resolve('./test/fixture.html'),
    reporters: ['spec','junit'],
    junitReporter: {
        outputDir: '../testResult',
        suite: 'models'
    },
    client: {
        captureConsole: true
    },
    singleRun: true
}