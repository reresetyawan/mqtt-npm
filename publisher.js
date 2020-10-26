var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://localhost');

client.on('connect', function () {
  setInterval(function () {
    client.publish('myTopic', 'Hallo subscriber'); // mengirim data
    console.log('mengirim data => [hallo subscriber]');
  }, 5000);
});
