var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var options = {
    server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
    replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } }
};
//mongo uri
var mongodbUri = '';
mongoose.connect(mongodbUri, options);
var conn = mongoose.connection;
conn.on('error', console.error.bind(console, 'connection error:'));
conn.once('open', function () {console.log("Great success!")});
var partySchemaJSON = {
  title: String,
  url: String
};
var party_schema = new Schema(partySchemaJSON);
var Party = mongoose.model("Party", party_schema)


module.exports.Party = Party;
