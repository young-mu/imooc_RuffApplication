var Client = require('azure-event-hubs').Client;

var connectionString = '<iothub connectionString>';

var client = Client.fromConnectionString(connectionString);

client.open()
    .then(function () {
        return client.getPartitionIds();
    })
    .then(function (partitionIds) {
        return partitionIds.map(function (partitionId) {
            return client.createReceiver('$Default', partitionId, {startAfterTime: Date.now()})
                .then(function (receiver) {
                    console.log('receiver (' + partitionId + ') starts to work ...');
                    receiver.on('errorReceived', function (err) {
                        console.log(err);
                    });
                    receiver.on('message', function (eventData) {
                        var from = eventData.annotations['iothub-connection-device-id'];
                        var content = eventData.body.toString();
                        console.log(from + ' > ' + content);
                    });
                });
        });
    });
