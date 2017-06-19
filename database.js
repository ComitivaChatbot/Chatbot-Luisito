var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//connect to MongoDB
//mongoose.connect('mongodb://courses:password@ds159998.mlab.com:59998/coursesdb');
var options = {
    server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
    replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } }
};

//uri de mlab
var mongodbUri = '';

mongoose.connect(mongodbUri, options);
var partySchemaJSON = {
  title: String,
  url: String
};
var party_schema = new Schema(partySchemaJSON);
var Party = mongoose.model("Party", party_schema)

var conn = mongoose.connection;

conn.on('error', console.error.bind(console, 'connection error:'));


//change structure
var party = new Party({title: "Enjoy Ciroc by MIA LIFE", url: "https://www.facebook.com/events/139008363317735/"});
party.save(function(){
  console.log("datos guardados");
})
conn.once('open', function () {console.log("Great success!")});
