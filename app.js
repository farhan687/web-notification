var sendNotification = function(data) {
  var headers = {
    "Content-Type": "application/json; charset=utf-8",
    "Authorization": "Basic Mjc1NGYxOWQtMGVmNS00ZDAwLWJkMmYtOWM3ZGEyZTgwYjJm"
  };
  
  var options = {
    host: "onesignal.com",
    port: 443,
    path: "/api/v1/notifications",
    method: "POST",
    headers: headers
  };
  
  var https = require('https');
  var req = https.request(options, function(res) {  
    res.on('data', function(data) {
      console.log("Response:");
      console.log(JSON.parse(data));
    });
  });
  
  req.on('error', function(e) {
    console.log("ERROR:");
    console.log(e);
  });
  
  req.write(JSON.stringify(data));
  req.end();
};

var message = {
  app_id: "337c71d1-ff10-4da0-b4c5-4244d7f98934",
  contents: {"en": "Check patient 1234"},
  data: {"text": "hello world"},
  filters: [{"field": "session_count", "relation": ">","value": "0"}],
  url: "http://localhost:8888"
};

sendNotification(message);