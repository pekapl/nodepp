var tls = require('tls');
module.exports = function(config) {
    var stream;
    return {
        "initStream": function () {
            try {
                var options = {
                    "host": config.host,
                    "port": config.port,
                    "rejectUnauthorized": false
                    //"secureProtocol": "SSLv3_method"
                };

                stream = tls.connect(options, function() {
                    console.log("Client connected");
                });

                stream.setEncoding('utf8');
                stream.on('data', function(data) {

                    console.log("Just received:", data);
                });
                stream.on('end', function() {
                    console.log("Got an end event");
                    server.close();
                });
            } catch(e) {
                console.log("Got error: ", e);
            }

        },
        "receive": function() {
            var data;
            return data;
        },
        "send": function(data) {}
    };

};
