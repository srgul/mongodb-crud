const MongoDB = require("mongodb").MongoClient;

MongoDB.connect("mongodb://127.0.0.1:27017/nodeMongodbTest", function(err, db) {
    if (err) {
        throw err;
        console.log("bağlantı sağlanmadı");
    } else {
        console.log("bağlantı sağlandı");
    }
})