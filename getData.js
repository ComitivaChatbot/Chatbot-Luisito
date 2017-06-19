
var Party = require("./party").Party;


function getData (){
  Party.find({ 'title': 'Enjoy Ciroc by MIA LIFE' }, 'name url', function (err, results) {
    if (err) return handleError(err);
    console.log(results);
    return results[0].url
  });
};
getData();
