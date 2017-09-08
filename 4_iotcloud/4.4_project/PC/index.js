var fs = require('fs');
var record = require('node-record-lpcm16');
var AipSpeech = require('./src/index').speech;
var Client = require('azure-iothub').Client;
var Message = require('azure-iot-common').Message;

var RATE = 16000;

// baidu Cloud

var APP_ID = '<app_id>';
var API_KEY = '<api_key>';
var SECRET_KEY = '<secret_key>';

var baiduClient = new AipSpeech(APP_ID, API_KEY, SECRET_KEY);

// Azure Cloud

var connectionString = '<iothub connectionString>';
var deviceId = 'ruff_node';

var azureClient = Client.fromConnectionString(connectionString);

// start recording
var file = fs.createWriteStream('command.wav');
record.start({
    sampleRate: RATE,
    verbose: true
}).pipe(file);

setTimeout(function () {
    // stop recording
    record.stop();

    // start to recognize
    var voice = fs.readFileSync('./command.wav');
    var voiceBuffer = new Buffer(voice);
    baiduClient.recognize(voiceBuffer, 'wav', RATE)
        .then(function (result) {
            if (result.result === undefined) {
                console.log('No result');
                return;
            }
            var content = result.result[0];
            console.log(content);
            if (content === '打开，') {
                sendMessage('on');
            } else if (content === '关闭，') {
                sendMessage('off', baiduClient);
            } else {
                console.log('invalid content: ' + content);
            }
        }, function (err) {
            console.log(err);
        });
}, 3000);

var sendMessage = function (action) {
    azureClient.open(function (err) {
        if (err) {
            console.log('connect failed with error', err);
            return;
        }
        console.log('connect successfully');

        var message = new Message(action);
        azureClient.send(deviceId, message, function (err) {
            if (err) {
                console.log('send failed with error', err);
                return;
            }
            console.log('send successfully');
        });
    });
};
