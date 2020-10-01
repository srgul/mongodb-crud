const MongoDB = require("mongodb").MongoClient;

MongoDB.connect("mongodb://127.0.0.1:27017/nodeMongodbTest", function(err, db) {
    if (err) {
        throw err;
        console.log("bağlantı sağlanmadı");
    } else {
        console.log("bağlantı sağlandı");

        db.collection("kitap").find({}).toArray(function(err, result) {

            console.log(result)
        })

        db.collection("kitap").deleteOne({ ad: "kaşağı" }, function(err, result) {
            if (err) {
                throw err;
            } else {

                console.log("Silme işlemi başarılı")
            }
        })

    }
})