var MongoClient = require('mongodb').MongoClient
  , request = require('request');


MongoClient.connect('mongodb://localhost:27017/mmfs', function(err, db) {
    if(err) throw err;


    request('http://data.tmsapi.com/v1.1/movies/showings?startDate=2015-02-24&zip=11215&radius=10&api_key=6ba9xurnyeebzp9dx4kr6ds7', function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var movies = JSON.parse(body);

            db.collection('movies').insert(movies, function (err, data) {
                    if(err) throw err;

                    console.dir(data);

                    db.close();
            });
 
 //"subType": "Feature Film"
  
        }
    });
});
