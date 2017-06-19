var Party = require("./party").Party;
var datos = function (){
  Party.find({ 'title': 'Enjoy Ciroc by MIA LIFE' }, 'name url', function (err, results) {
    if (err) return handleError(err);
    console.log(results);
    return results[0].url
  });
};
module.exports = datos;
